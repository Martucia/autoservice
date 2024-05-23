import UiTable from "../../../shared/ui/ui-table";
import useReviewList from "../model/use-review-list";

const ReviewList = () => {
  const { reviews, total, limit, page, isLoading, setPage } = useReviewList();

  return (
    <UiTable
      heads={["Дата", "Клієнт", "Пошта", "Відгук"]}
      data={reviews}
      page={page}
      setPage={setPage}
      limit={limit}
      total={total}
      isLoading={isLoading}
    />
  );
};

export default ReviewList;
