import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly AuthService: AuthService) {}

  @HttpCode(200)
  @Post('sign-up')
  async signUp(@Body() dto: AuthDto) {
    return this.AuthService.signUp(dto);
  }
}