import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  AddReviewData,
  Review,
  PaginationResultDto,
} from "../../shared/constants/types";

const queryKey = "reviews";
const URL = import.meta.env.VITE_SERVER_API + "review";
const limit = 20;

export function useAddReviewMutation() {
  return useMutation({
    mutationFn: async (data: AddReviewData) => {
      const response = await axios.post(`${URL}`, data);

      return response.data;
    },
  });
}

export function useReviewListQuery(page: number = 1) {
  return useQuery<PaginationResultDto<Review>, Error>({
    queryKey: [queryKey, page],
    queryFn: async () => {
      const response = await axios.get(`${URL}?page=${page}&limit=${limit}`, {
        withCredentials: true,
      });

      return response.data;
    },
    staleTime: Infinity,
    placeholderData: { data: [], page: 1, limit, total: 0 },
    retry: 0,
  });
}
