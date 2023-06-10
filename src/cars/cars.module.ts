import { Module } from "@nestjs/common";
import { CarsService } from "./cars.service";
import { CarsController } from "./cars.controller";
import { CarRepository } from "./cars.repository";
import { KnexConfig } from "src/knex/knex.config";
import { CartRepository } from "src/cart/cart.repository";

@Module({
  providers: [CarsService, CarRepository, CartRepository, KnexConfig],
  controllers: [CarsController],
})
export class CarsModule {}
