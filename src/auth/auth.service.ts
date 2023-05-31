import { Body, ConflictException, Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from './auth.repository';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private authRepo: AuthRepository,
    private jwtService: JwtService,
  ) {}
  async Login(@Body() user: LoginDto) {
    return {
      message: 'Successfully login',
      token: await this.jwtService.signAsync(user),
    };
  }
  async Register(@Body() user: RegisterDto) {
    const foundedUser = await this.authRepo.getUserByEmail(user.email);
    if (foundedUser) {
      return new ConflictException('Email already exists!');
    }
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
    return await this.authRepo.Register(user);
  }
}
