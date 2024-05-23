import { Form, Formik } from "formik"; // FormikProps
import useAppointmentCreateForm from "../model/use-appointment-create-form.ts";
import UiTextField from "../../../shared/ui/ui-text-field";
import UiButton from "../../../shared/ui/ui-button";
import UiTextArea from "../../../shared/ui/ui-text-area";
import { AppointmentCreateSchema } from "../../../shared/constants/form-schemas";

const AppointmentCreateForm = () => {
  const { onSubmit } = useAppointmentCreateForm();

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        issue: "",
      }}
      validationSchema={AppointmentCreateSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="flex flex-col py-4 gap-4">
          <UiTextField id="name" placeholder="Ваше ім’я" />
          <UiTextField id="phone" type="phone" placeholder="Номер телефону" />
          <UiTextField id="email" placeholder="Адреса електронної пошти" />
          <UiTextArea id="issue" placeholder="Ваша проблема" />

          <UiButton
            type="submit"
            variant="primary"
            className="mt-4 rounded-none"
          >
            надіслати повідомлення
          </UiButton>
        </Form>
      )}
    </Formik>
  );
};

export default AppointmentCreateForm;
