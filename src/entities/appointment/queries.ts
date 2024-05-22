import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { AddAppointmentData } from "../../shared/constants/types";

// const queryKey = "appointments";
const URL = import.meta.env.VITE_SERVER_API;

export function useAddAppointmentMutation() {
  return useMutation({
    mutationFn: async (data: AddAppointmentData) => {
      const response = await axios.post(`${URL}appointment`, data);

      return response.data;
    },
  });
}
