export type AddAppointmentData = {
  name: string;
  phone: string;
  email: string;
  issue: string;
};

export enum StatusEnum {
  Success = "success",
  Failed = "failed",
}

export type ResponseType = {
  message: string;
  status: StatusEnum;
};

export type RegistrationData = {
  name: string;
  phone: string;
  email: string;
  password: string;
};

export type LoginData = {
  email: string;
  password: string;
};

export type ReviewData = {
  text: string;
}

export type AddReviewData = {
  text: string;
  user: string;
}