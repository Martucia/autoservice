import toast from "react-hot-toast";
import { useModalsContext } from "../../../context/modalsContext";
import { useSessionQuery } from "../../../entities/auth/queries";
import { ReviewData, ResponseType } from "../../../shared/constants/types";
import { useAddReviewMutation } from "../../../entities/review";

export default function useCreateReview() {
  const { setLoginOpen } = useModalsContext();

  const { data } = useSessionQuery();

  const addReviewMutation = useAddReviewMutation();

  const onSubmit = (values: ReviewData, actions: any) => {
    if (data) {
      addReviewMutation.mutate(
        { ...values, user: data.id },
        {
          onSuccess(data: ResponseType) {
            actions.resetForm();
            toast.success(data.message);
          },
          onError() {
            toast.error("Помилка при записі");
          },
        }
      );
    } else {
      toast("Потрібно авторизуватись", {
        icon: "👀",
      });
      setLoginOpen(true);
    }
  };
  return { onSubmit };
}
