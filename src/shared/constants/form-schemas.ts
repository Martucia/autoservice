import * as Yup from "yup";

export const AppointmentCreateSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, "Максимальна довжина 50 символів")
    .required("Це поле є обов'язковим"),
  phone: Yup.string().required("Це поле є обов'язковим"),
  email: Yup.string()
    .email("Неправильний формат")
    .required("Це поле є обов'язковим"),
  issue: Yup.string()
    .min(10, "Мінімальна довжина 10 символів")
    .max(500, "Максимальна довжина 500 символів")
    .required("Це поле є обов'язковим"),
});

export const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .max(50, "Максимальна довжина 50 символів")
    .required("Це поле є обов'язковим"),
  phone: Yup.string().required("Це поле є обов'язковим"),
  email: Yup.string()
    .email("Неправильний формат")
    .required("Це поле є обов'язковим"),
  password: Yup.string().required("Це поле є обов'язковим"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Неправильний формат")
    .required("Це поле є обов'язковим"),
  password: Yup.string().required("Це поле є обов'язковим"),
});

export const ReviewSchema = Yup.object().shape({
  text: Yup.string()
    .min(10, "Мінімальна довжина 10 символів")
    .required("Напишіть свій відгук"),
});
