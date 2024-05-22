import { Form, Formik } from "formik";
import { useModalsContext } from "../../../context/modalsContext";
import UiModalOverflow from "../../../shared/ui/ui-modal-overflow";
import { RegistrationSchema } from "../../../shared/constants/form-schemas";
import useRegistration from "../model/use-registration";
import UiTextField from "../../../shared/ui/ui-text-field";
import UiButton from "../../../shared/ui/ui-button";
import UiPasswordField from "../../../shared/ui/ui-password-field";

const Registration = () => {
  const { setRegistrationOpen, setLoginOpen } = useModalsContext();
  const { onSubmit } = useRegistration();
  return (
    <UiModalOverflow
      title="Реєстрація"
      onClose={() => setRegistrationOpen(false)}
    >
      <div>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            password: "",
          }}
          validationSchema={RegistrationSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="flex flex-col py-4 gap-4">
              <UiTextField id="name" placeholder="Ваше ім’я" />
              <UiTextField
                id="phone"
                type="phone"
                placeholder="Номер телефону"
              />
              <UiTextField id="email" placeholder="Адреса електронної пошти" />
              <UiPasswordField id="password" placeholder="Пароль" />

              <UiButton
                type="submit"
                variant="primary"
                className="mt-4 rounded-none"
              >
                Зареєструватись
              </UiButton>

              <div className="flex justify-between items-center mt-2">
                <span>Уже зареєстровані?</span>
                <button
                  className="text-sky-500 transition-all hover:text-sky-600 font-bold"
                  onClick={() => {
                    setRegistrationOpen(false);
                    setLoginOpen(true);
                  }}
                >
                  Авторизуватись
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </UiModalOverflow>
  );
};

export default Registration;
