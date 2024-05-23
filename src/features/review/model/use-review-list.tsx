import { useState } from "react";
import { useReviewListQuery } from "../../../entities/review";
import { formatDate } from "../../../utils/functions";

export default function useReviewList() {
  const [page, setPage] = useState<number>(1);

  const { data, isFetching } = useReviewListQuery(page);

  const reviews = data?.data
    ? data.data.map((review) => ({
        createdAt: formatDate(review.createdAt),
        name: review.user.name,
        text: review.text,
        email: review.user.email,
      }))
    : [];

  return {
    reviews,
    total: data?.total || 0,
    limit: data?.limit || 1,
    page: data?.page || 1,
    isLoading: isFetching,
    setPage,
  };
}
