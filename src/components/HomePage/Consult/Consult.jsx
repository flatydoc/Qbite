import styles from "./Consult.module.scss";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";

import { FormService } from "../../../core/services/form.service";
import { Button } from "../../ui/Button/Button";

export const Consult = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useRef(null);

  const load = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  // let uri = window.location.href.split("?");
  // let utms = uri.filter(() => {
  //   "?";
  // });

  let utms = "test";

  const showSuccess = () => {
    toast.current.show({
      severity: "success",
      summary: "Заявка успешна отправлена",
      detail: `Уважаемый ${getValues(
        "name"
      )}, наш специалист свяжется с вами в ближайшее время`,
    });
  };

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Ошибка",
      detail: "Проверьте качество сетевого соединения и повторите попытку",
    });
  };

  const defaultValues = {
    name: "",
    phone: "",

    utms,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm({ defaultValues });

  const getFormErrorMessage = (error) => {
    return errors[error] ? (
      <small className="p-error">{errors[error].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  const onSubmit = async (data) => {
    load();
    try {
      await FormService.send(data);
      setTimeout(() => {
        showSuccess();
        reset();
      }, 1000);
      console.log(data);
    } catch (error) {
      setTimeout(() => {
        showError();
      }, 1000);
      console.log(error);
    }
  };

  return (
    <section className={styles.consult}>
      <h2 className={styles.title}>Получите бесплатную консультацию</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Введите Ваше имя" }}
          render={({ field, fieldState }) => (
            <div className={styles.formItem}>
              <label
                htmlFor={field.name}
                className={classNames({ "p-error": errors.value })}
              ></label>
              <span className="p-float-label">
                <InputText
                  id={field.name}
                  value={field.value}
                  className={classNames(
                    { "p-invalid": fieldState.error },
                    styles.input
                  )}
                  onChange={(e) => field.onChange(e.target.value)}
                />
                <label style={{ color: "#acb4c3" }} htmlFor={field.name}>
                  Имя
                </label>
              </span>
              {getFormErrorMessage(field.name)}
            </div>
          )}
        />
        <Controller
          name="phone"
          control={control}
          rules={{ required: "Введите номер телефона" }}
          render={({ field, fieldState }) => (
            <div className={styles.formItem}>
              <label
                htmlFor={field.phone}
                className={classNames({ "p-error": errors.value })}
              ></label>
              <span className="p-float-label">
                <InputMask
                  className={classNames(
                    { "p-invalid": fieldState.error },
                    styles.input
                  )}
                  onChange={(e) => field.onChange(e.target.value)}
                  id={field.phone}
                  value={field.value}
                  mask="+375 (99) 999-99-99"
                />
                <label style={{ color: "#acb4c3" }} htmlFor={field.phone}>
                  Номер телефона
                </label>
              </span>
              {getFormErrorMessage(field.name)}
            </div>
          )}
        />

        <Button isLoading={isLoading} type={"submit"} btnText={"ОТПРАВИТЬ"} />
      </form>

      <Toast ref={toast} />
    </section>
  );
};
