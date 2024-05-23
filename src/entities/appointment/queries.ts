import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  AddAppointmentData,
  Appointment,
  PaginationResultDto,
} from "../../shared/constants/types";

const queryKey = "appointments";
const URL = import.meta.env.VITE_SERVER_API + "appointment";
const limit = 20;

export function useAddAppointmentMutation() {
  return useMutation({
    mutationFn: async (data: AddAppointmentData) => {
      const response = await axios.post(URL, data);

      return response.data;
    },
  });
}

export function useAppointmentListQuery(page: number = 1) {
  return useQuery<PaginationResultDto<Appointment>, Error>({
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
