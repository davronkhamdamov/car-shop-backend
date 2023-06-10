import { Inject, Injectable } from "@nestjs/common";
import { KnexConfig } from "src/knex/knex.config";
import { RegisterDto } from "./dto/auth.dto";
import { CurrentUserDto } from "./dto/Corrent.userDto";

@Injectable()
export class AuthRepository {
  @Inject()
  private readonly knexConfig: KnexConfig;

  Register(user: RegisterDto) {
    const knex = this.knexConfig.instance;
    return knex("users").insert(user);
  }
  getUserByEmail(email: string) {
    const knex = this.knexConfig.instance;
    return knex.select().from("users").where({ email });
  }
  getUserById(userId: CurrentUserDto) {
    const knex = this.knexConfig.instance;
    return knex
      .select()
      .from("users")
      .where("id", userId.id)
      .returning(["id", "username", "email", "imgurl"]);
  }
}
