export enum StatusEnum {
  Success = 'success',
  Failed = 'failed',
}

export type ResponseType = {
  message: string;
  status: StatusEnum;
};
