import { Body, Controller, Get, Param, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthorizationGuard } from "src/auth/guard/Auth.guard";
import { UsersService } from "./users.service";
import { LoginDto } from "src/auth/dto/auth.dto";
import {
  UpdateEmail,
  UpdateUsername,
  updateRole,
  updateimgUrl,
} from "./userDto/UserDto";
import { CurrentUserDto } from "src/auth/dto/Corrent.userDto";
import { CurrentUser } from "src/auth/guard/auth.decorator";
import { UpdateUserDto } from "./userDto/UserDto";
import { ICarId } from "src/cars/Dto/Car.dto";

@ApiBearerAuth()
@Controller("users")
@ApiTags("Users")
@UseGuards(AuthorizationGuard)
export class UsersController {
  constructor(private UsersService: UsersService) {}
  @ApiResponse({
    status: 200,
    description: "Users info",
    type: [LoginDto],
  })
  @Get("getallusers")
  async getAllUser() {
    return await this.UsersService.getAllUser();
  }
  @ApiResponse({
    status: 200,
    type: UpdateEmail,
  })
  @Put("updateemail")
  async UpdateUserEmail(
    @Body() email: UpdateEmail,
    @CurrentUser() userId: CurrentUserDto
  ) {
    return await this.UsersService.UpdateUserEmail(email, userId);
  }
  @ApiResponse({
    status: 200,
    description: "Users info",
    type: UpdateUsername,
  })
  @Put("updateusername")
  async UpdateUserName(
    @Body() username: UpdateUsername,
    @CurrentUser() userId: CurrentUserDto
  ) {
    return await this.UsersService.UpdateUserName(username, userId);
  }
  @ApiResponse({
    status: 200,
    description: "Users info",
    type: UpdateUsername,
  })
  @Put("updateimgurl")
  async updateimgUrl(
    @Body() imgurl: updateimgUrl,
    @CurrentUser() userId: CurrentUserDto
  ) {
    return await this.UsersService.updateimgUrl(imgurl, userId);
  }
  @ApiResponse({
    status: 200,
    description: "Users info",
    type: UpdateUserDto,
  })
  @Put("updaterole/:id")
  async updateRole(
    @Body() role: updateRole,
    @CurrentUser() userId: CurrentUserDto,
    @Param() id: ICarId
  ) {
    return await this.UsersService.updateRole(role, userId, id);
  }
}
