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
};

export type AddReviewData = {
  text: string;
  user: string;
};

export type User = {
  _id: string;
  name: string;
  phone: string;
  email: string;
};

export type Appointment = {
  _id: string;
  user: User;
  issue: string;
  createdAt: Date;
};

export type Review = {
  _id: string;
  user: User;
  text: string;
  createdAt: Date;
};

export type PaginationResultDto<T> = {
  data: T[];
  page: number;
  limit: number;
  total: number;
};
