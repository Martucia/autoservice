import { PartialType } from '@nestjs/mapped-types';

export class CreateUserDto {
  name: string;
  phone: string;
  email: string;
  hash: string;
  salt: string;
}

export class CreateNotAuthUserDto {
  name: string;
  phone: string;
  email: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
  isAuth: boolean;
}
