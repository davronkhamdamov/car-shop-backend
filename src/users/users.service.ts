import { ForbiddenException, Injectable } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import {
  UpdateEmail,
  UpdateUsername,
  updateRole,
  updateimgUrl,
} from "./userDto/UserDto";
import { CurrentUserDto } from "src/auth/dto/Corrent.userDto";
import { ICarId } from "src/cars/Dto/Car.dto";

@Injectable()
export class UsersService {
  constructor(private userRepo: UserRepository) {}
  async getAllUser() {
    const user = await this.userRepo.getAllUser();
    return user;
  }
  async UpdateUserEmail(email: UpdateEmail, userId: CurrentUserDto) {
    const user = await this.userRepo.UpdateUserEmail(email, userId);
    return {
      message: "User successfully updated",
      user: user[0],
    };
  }
  async UpdateUserName(username: UpdateUsername, userId: CurrentUserDto) {
    const user = await this.userRepo.UpdateUserName(username, userId);
    return {
      message: "User successfully updated",
      user: user[0],
    };
  }
  async updateimgUrl(imgUrl: updateimgUrl, userId: CurrentUserDto) {
    const user = await this.userRepo.updateimgUrl(imgUrl, userId);
    return {
      message: "User successfully updated",
      user: user[0],
    };
  }
  async updateRole(role: updateRole, userId: CurrentUserDto, id: ICarId) {
    const foundedUser = await this.userRepo.getUserById(userId);
    if (!foundedUser[0]) {
      return {
        error: true,
        message: "User not found",
      };
    }
    if (foundedUser[0].role) {
      const userEr = await this.userRepo.updateRole(role, id);
      if (userEr.error) {
        return userEr;
      }
      return this.getAllUser();
    } else {
      return new ForbiddenException();
    }
  }
}
