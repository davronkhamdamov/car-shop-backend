import { ApiProperty, OmitType, PickType } from "@nestjs/swagger";
import { IUser, token } from "../interface/auth.interface";

class UserDto implements IUser {
  @ApiProperty({
    type: String,
    default: "uuid",
  })
  id?: string;
  @ApiProperty({
    type: String,
    description: "Enter your username",
    default: "John",
  })
  username: string;
  @ApiProperty({
    type: String,
    description: "Enter your email",
    default: "example@gmail.com",
  })
  email: string;
  @ApiProperty({
    type: String,
    description: "Enter your password",
    default: "123456789",
  })
  password: string;
  @ApiProperty({
    type: String,
    description: "We recommend 200x200 images",
    default: "https://picsum.photos/300/300",
  })
  imgurl: string;
}
class TokenDTo implements token {
  @ApiProperty({
    type: String,
    default: "Successfully login",
  })
  message: string;
  @ApiProperty({
    type: String,
    default: "Token",
  })
  token: string;
}

export class RegisterDto extends OmitType(UserDto, ["id"]) {}

export class Token extends PickType(TokenDTo, ["message", "token"]) {}

export class LoginDto extends PickType(UserDto, ["email", "password"]) {}
