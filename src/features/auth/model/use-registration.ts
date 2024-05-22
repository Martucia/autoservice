import { useModalsContext } from "../../../context/modalsContext";
import { useRegistrationMutation } from "../../../entities/auth";
import { useSessionQuery } from "../../../entities/auth/queries";
import {
  RegistrationData,

} from "../../../shared/constants/types";
import toast from "react-hot-toast";

export default function useRegistration() {
  const { setRegistrationOpen } = useModalsContext();

  const { refetch } = useSessionQuery();

  const registrationMutation = useRegistrationMutation();

  const onSubmit = (values: RegistrationData, actions: any) => {
    registrationMutation.mutate(values, {
      onSuccess() {
        actions.resetForm();
        toast.success("Реєстрація успішна");
        setRegistrationOpen(false);
        refetch();
      },
      onError() {
        toast.error("Помилка при реєстрації");
      },
    });
  };

  return { onSubmit };
}
