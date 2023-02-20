import styles from "./Feedback.module.scss";
import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { NavLink } from "react-router-dom";

export const Feedback = (props) => {
  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Form Submitted",
      detail: getValues("value"),
    });
  };

  const defaultValues = {
    value: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    data.value && show();

    reset();
  };

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <section ref={props.formRef} className={styles.feedback}>
      <h2 className={styles.title}>{props.state.title}</h2>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <p className={styles.subtitle}>{props.state.subtitle}</p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-column gap-2"
          >
            <Toast ref={toast} />
            <Controller
              name="value"
              control={control}
              rules={{ required: "Name - Surname is required." }}
              render={({ field, fieldState }) => (
                <>
                  <label
                    htmlFor={field.name}
                    className={classNames({ "p-error": errors.value })}
                  ></label>
                  <span className="p-float-label">
                    <InputText
                      id={field.name}
                      value={field.value}
                      className={classNames({ "p-invalid": fieldState.error })}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
                    <label htmlFor={field.name}>Name - Surname</label>
                  </span>
                  {getFormErrorMessage(field.name)}
                </>
              )}
            />
            <Button label="Submit" type="submit" icon="pi pi-check" />
          </form>
          <p className={styles.warning}>
            * отправляя заявку, вы соглашаетесь с
            <NavLink className={styles.link} to="/privacy-policy">
              <span> Политикой Конфиденциальности</span>
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};
