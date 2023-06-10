import { Inject, Injectable } from "@nestjs/common";
import { KnexConfig } from "src/knex/knex.config";
import {
  UpdateEmail,
  UpdateUsername,
  updateRole,
  updateimgUrl,
} from "./userDto/UserDto";
import { CurrentUserDto } from "src/auth/dto/Corrent.userDto";
import { ICarId } from "src/cars/Dto/Car.dto";

@Injectable()
export class UserRepository {
  @Inject()
  private readonly knexConfig: KnexConfig;
  getAllUser() {
    const knex = this.knexConfig.instance;
    return knex.select().from("users").orderBy("username", "email");
  }
  getUserById(id: CurrentUserDto) {
    const knex = this.knexConfig.instance;
    return knex.select().from("users").where(id);
  }
  UpdateUserEmail(email: UpdateEmail, userId: CurrentUserDto) {
    const knex = this.knexConfig.instance;
    return knex("users")
      .where("id", userId.id)
      .returning(["id", "username", "email", "imgurl"])
      .update({ email: email.email });
  }
  UpdateUserName(username: UpdateUsername, userId: CurrentUserDto) {
    const knex = this.knexConfig.instance;
    return knex("users")
      .where("id", userId.id)
      .returning(["id", "username", "email", "imgurl"])
      .update({ username: username.username });
  }
  updateimgUrl(imgurl: updateimgUrl, userId: CurrentUserDto) {
    const knex = this.knexConfig.instance;
    return knex("users")
      .where("id", userId.id)
      .returning(["id", "username", "email", "imgurl"])
      .update({ imgurl: imgurl.imgUrl });
  }
  updateRole(role: updateRole, id: ICarId) {
    const knex = this.knexConfig.instance;
    return knex("users")
      .where("id", id.id)
      .update(role)
      .then((data: any) => data)
      .catch((error: any) => {
        return {
          error: true,
          message: error.message,
        };
      });
  }
}
