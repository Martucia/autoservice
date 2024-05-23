import {
  AddAppointmentData,
  ResponseType,
} from "../../../shared/constants/types";
import { useAddAppointmentMutation } from "../../../entities/appointment";
import toast from "react-hot-toast";

export default function useAppointmentCreateForm() {
  const addAppointmentMutation = useAddAppointmentMutation();

  const onSubmit = (values: AddAppointmentData, actions: any) => {
    addAppointmentMutation.mutate(values, {
      onSuccess(data: ResponseType) {
        actions.resetForm();
        toast.success(data.message);
      },
      onError() {
        toast.error("Помилка при записі");
      },
    });
  };

  return { onSubmit };
}
