import { Module } from "@nestjs/common";
import { CartController } from "./cart.controller";
import { CartService } from "./cart.service";
import { KnexConfig } from "src/knex/knex.config";
import { CartRepository } from "./cart.repository";

@Module({
  providers: [CartService, CartRepository, KnexConfig],
  controllers: [CartController],
})
export class CartModule {}
