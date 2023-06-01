import {
  BadRequestException,
  Body,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { LoginDto, RegisterDto } from "./dto/auth.dto";
import { JwtService } from "@nestjs/jwt";
import { AuthRepository } from "./auth.repository";
import * as bcrypt from "bcrypt";
@Injectable()
export class AuthService {
  constructor(
    private authRepo: AuthRepository,
    private jwtService: JwtService
  ) {}
  async Login(@Body() user: LoginDto) {
    const foundedUser = await this.authRepo.getUserByEmail(user.email);
    if (!foundedUser[0]) {
      return new NotFoundException("Email not found");
    }
    if (await bcrypt.compare(user.password, foundedUser[0].password)) {
      return {
        message: "Successfully login",
        token: await this.jwtService.signAsync({ id: foundedUser[0].id }),
      };
    } else {
      return new BadRequestException("Password wrong");
    }
  }
  async Register(@Body() user: RegisterDto) {
    const foundedUser = await this.authRepo.getUserByEmail(user.email);
    if (foundedUser[0]) {
      return new ConflictException("Email already exists!");
    }
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
    await this.authRepo.Register(user);
    return {
      message: "User succesfully registered",
    };
  }
}
