import { Form, Formik } from "formik";
import { useModalsContext } from "../../../context/modalsContext";
import UiModalOverflow from "../../../shared/ui/ui-modal-overflow";
import { LoginSchema } from "../../../shared/constants/form-schemas";
import UiTextField from "../../../shared/ui/ui-text-field";
import UiButton from "../../../shared/ui/ui-button";
import useLogin from "../model/use-login";
import UiPasswordField from "../../../shared/ui/ui-password-field";

const Login = () => {
  const { setRegistrationOpen, setLoginOpen } = useModalsContext();
  const { onSubmit } = useLogin();
  return (
    <UiModalOverflow title="Авторизація" onClose={() => setLoginOpen(false)}>
      <div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={onSubmit}
        >
          {() => (
            <Form className="flex flex-col py-4 gap-4">
              <UiTextField
                autoComplete={true}
                id="email"
                placeholder="Адреса електронної пошти"
              />
              <UiPasswordField id="password" placeholder="Пароль" />

              <UiButton
                type="submit"
                variant="primary"
                className="mt-4 rounded-none"
              >
                Увійти
              </UiButton>

              <div className="flex justify-between items-center mt-2">
                <span>Ще не зареєстровані?</span>
                <button
                  className="text-sky-500 transition-all hover:text-sky-600 font-bold"
                  onClick={() => {
                    setLoginOpen(false);
                    setRegistrationOpen(true);
                  }}
                >
                  Зареєструватись
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </UiModalOverflow>
  );
};

export default Login;
