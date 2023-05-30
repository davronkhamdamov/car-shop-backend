import { Body, Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  async Login(@Body() user: LoginDto) {
    return user;
  }
  async Register(@Body() user: RegisterDto) {
    return user;
  }
}
