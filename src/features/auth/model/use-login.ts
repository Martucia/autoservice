import { useModalsContext } from "../../../context/modalsContext";
import {
  useLoginMutation,
  useSessionQuery,
} from "../../../entities/auth/queries";
import { LoginData } from "../../../shared/constants/types";
import toast from "react-hot-toast";

export default function useLogin() {
  const { setLoginOpen } = useModalsContext();

  const { refetch } = useSessionQuery();

  const loginMutation = useLoginMutation();

  const onSubmit = (values: LoginData, actions: any) => {
    loginMutation.mutate(values, {
      onSuccess() {
        actions.resetForm();
        toast.success("Авторизація успішна");
        setLoginOpen(false);
        refetch();
      },
      onError() {
        toast.error("Помилка при авторизації");
      },
    });
  };

  return { onSubmit };
}
