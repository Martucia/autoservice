import { useMutation } from "@tanstack/react-query";
import { AddReviewData } from "../../shared/constants/types";
import axios from "axios";

const URL = import.meta.env.VITE_SERVER_API;

export function useAddReviewMutation() {
  return useMutation({
    mutationFn: async (data: AddReviewData) => {
      const response = await axios.post(`${URL}review`, data);

      return response.data;
    },
  });
}
