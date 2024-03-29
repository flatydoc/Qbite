import styles from "./Consult.module.scss";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { InputMask } from "primereact/inputmask";
import image from "../../../assets/images/consult.svg";
import { FormService } from "../../../core/services/form.service";
import { Button } from "../../ui/Button/Button";
import { NavLink } from "react-router-dom";

export const Consult = (props) => {
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
      )}, наш специалист свяжется с Вами в ближайшее время`,
    });
  };

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Ошибка",
      detail:
        "Повторите попытку позже, или свяжитесь с нами удобным для Вас способом",
    });
  };

  const getParam = (param) => {
    const urlParams = new URL(window.location.toString()).searchParams;
    return urlParams.get(param) || "";
  };

  const utm_source = getParam("utm_source");
  const utm_medium = getParam("utm_medium");
  const utm_campaign = getParam("utm_campaign");
  const utm_term = getParam("utm_term");
  const utm_content = getParam("utm_content");

  const defaultValues = {
    name: "",
    phone: "",

    utm_source,
    utm_medium,
    utm_campaign,
    utm_term,
    utm_content,
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <section ref={props.formRef} className={styles.consult}>
      <h2 className={styles.title}>Получите бесплатную консультацию!</h2>
      <div className={styles.wrapper}>
        <div className={styles.formWrapper}>
          <p className={styles.subtitle}>
            Мы готовы предложить лучшие решения для Вашего бизнеса. Оставьте
            свои данные и мы свяжемся с Вами!
          </p>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
            </div>

            <Button
              isLoading={isLoading}
              type={"submit"}
              btnText={"ОТПРАВИТЬ"}
            />
          </form>
          <p className={styles.notice}>
            Отправляя заявку, вы соглашаетесь с
            <NavLink
              onClick={scrollToTop}
              className={styles.link}
              to="/privacy-policy"
            >
              <span> Политикой Конфиденциальности</span>
            </NavLink>
          </p>
        </div>
        <img className={styles.img} src={image} alt="#" />
      </div>
      <Toast ref={toast} />
    </section>
  );
};
