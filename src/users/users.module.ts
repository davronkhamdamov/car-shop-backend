import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { KnexConfig } from "src/knex/knex.config";
import { UserRepository } from "./user.repository";

@Module({
  controllers: [UsersController],
  providers: [UsersService, KnexConfig, UserRepository],
})
export class UsersModule {}
