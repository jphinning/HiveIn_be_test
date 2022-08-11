import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsString()
  readonly email: string;

  @MinLength(8, {
    message: 'Password can`t be less than 8',
  })
  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly role: string;
}