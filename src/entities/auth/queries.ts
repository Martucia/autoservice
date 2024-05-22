import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { LoginData, RegistrationData } from "../../shared/constants/types";

const URL = import.meta.env.VITE_SERVER_API;
const sessionKey = ["session"];

export function useRegistrationMutation() {
  return useMutation({
    mutationFn: async (data: RegistrationData) => {
      const response = await axios.post(`${URL}auth/sign-up`, data, {
        withCredentials: true,
      });

      return response.data;
    },
  });
}

export function useLoginMutation() {
  return useMutation({
    mutationFn: async (data: LoginData) => {
      const response = await axios.post(`${URL}auth/sign-in`, data, {
        withCredentials: true,
      });

      return response.data;
    },
  });
}

export function useSignOutMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await axios.post(
        `${URL}auth/sign-out`,
        {},
        {
          withCredentials: true,
        }
      );

      queryClient.setQueryData(sessionKey, null);

      return response.data;
    },
  });
}

export function useSessionQuery(onRender = false) {
  return useQuery({
    queryKey: sessionKey,
    queryFn: async () => {
      const response = await axios.get(`${URL}auth/session`, {
        withCredentials: true,
      });

      return response.data;
    },
    retry: 0,
    staleTime: 5 * 60 * 1000,
    enabled: onRender,
  });
}
