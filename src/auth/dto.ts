import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class SignUpBodyDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  phone: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class SignInBodyDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class GetSessionInfoDto {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
  iat: number;
  exp: number;
}
