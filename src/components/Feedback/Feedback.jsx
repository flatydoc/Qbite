import styles from "./Feedback.module.scss";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import { NavLink } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";

import { InputTextarea } from "primereact/inputtextarea";
import { FormService } from "../../core/services/form.service";
import { Button } from "../ui/Button/Button";

export const Feedback = (props) => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useRef(null);

  const load = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

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

  const options = [
    { name: "Разработка сайтов", code: "1" },
    { name: "Контекстная реклама", code: "2" },
    { name: "SEO-продвижение", code: "3" },
    { name: "Таргет", code: "4" },
  ];

  const defaultValues = {
    name: "",
    phone: "",
    text: "",
    option: {},
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
    if (props.state.option) {
      data.option = props.state.option;
    }
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <section ref={props.formRef} className={styles.feedback}>
      <h2 className={styles.title}>{props.state.title}</h2>
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <p className={styles.subtitle}>{props.state.subtitle}</p>
          <div className={styles.form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.flex}>
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
                        <label
                          style={{ color: "#acb4c3" }}
                          htmlFor={field.name}
                        >
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
                        <label
                          style={{ color: "#acb4c3" }}
                          htmlFor={field.phone}
                        >
                          Номер телефона
                        </label>
                      </span>
                      {getFormErrorMessage(field.name)}
                    </div>
                  )}
                />
              </div>
              {props.state.option ? (
                ""
              ) : (
                <Controller
                  name="option"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div
                      style={{ marginBottom: "36px" }}
                      className={styles.formItem}
                    >
                      <span className="p-float-label">
                        <Dropdown
                          value={field.value}
                          optionLabel="name"
                          name="option"
                          id={field.option}
                          options={options}
                          control={control}
                          onChange={(e) => field.onChange(e.value)}
                          className={styles.input}
                        />
                        <label
                          style={{ color: "#acb4c3" }}
                          htmlFor={field.option}
                        >
                          С чем нужна помощь?
                        </label>
                      </span>
                    </div>
                  )}
                />
              )}
              {props.state.option ? (
                <Controller
                  name="text"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div
                      style={{ marginBottom: "36px" }}
                      className={styles.formItem}
                    >
                      <span className="p-float-label">
                        <InputTextarea
                          className={styles.input}
                          rows={4}
                          cols={20}
                          id={field.text}
                          value={field.value}
                          onChange={(e) => field.onChange(e.target.value)}
                        />
                        <label
                          style={{ color: "#acb4c3" }}
                          htmlFor={field.text}
                        >
                          Текст сообщения
                        </label>
                      </span>
                    </div>
                  )}
                />
              ) : (
                ""
              )}
              <Button
                isLoading={isLoading}
                type={"submit"}
                btnText={"ОТПРАВИТЬ"}
              />
            </form>
            <p className={styles.notice}>
              * Отправляя заявку, вы соглашаетесь с
              <NavLink
                onClick={scrollToTop}
                className={styles.link}
                to="/privacy-policy"
              >
                <span> Политикой Конфиденциальности</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
      <Toast ref={toast} />
    </section>
  );
};
