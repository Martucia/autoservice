import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateAppointmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  phone: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  issue: string;
}
