import { Form, Formik } from "formik";
import { ReviewSchema } from "../../../shared/constants/form-schemas";
import UiTextArea from "../../../shared/ui/ui-text-area";
import UiButton from "../../../shared/ui/ui-button";
import useCreateReview from "../model/use-create-review";

const CreateReview = () => {
  const { onSubmit } = useCreateReview();

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      validationSchema={ReviewSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form className="flex flex-col py-4 gap-4">
          <UiTextArea id="text" placeholder="Ваш відгук" rows={3} />

          <div className="flex justify-end">
            <UiButton
              type="submit"
              variant="primary"
              className="mt-4 rounded-none max-w-sm"
            >
              надіслати відгук
            </UiButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateReview;
