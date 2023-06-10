import { ApiProperty, PickType } from "@nestjs/swagger";

export class UpdateUserDto {
  @ApiProperty({
    type: String,
    default: "exaple@gmail.com",
  })
  email: string;
  @ApiProperty({
    type: String,
    default: "new username",
  })
  username: string;
  @ApiProperty({
    type: String,
    default: "new username",
  })
  imgUrl: string;
}
export class UpdateEmail extends PickType(UpdateUserDto, ["email"]) {}
export class UpdateUsername extends PickType(UpdateUserDto, ["username"]) {}
export class updateimgUrl extends PickType(UpdateUserDto, ["imgUrl"]) {}

export class updateRole {
  @ApiProperty({
    type: Boolean,
    default: false,
  })
  role: boolean;
}
