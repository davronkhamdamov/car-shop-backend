import { Inject, Injectable } from "@nestjs/common";
import { KnexConfig } from "src/knex/knex.config";
import { CreateCarDto, ICarId } from "./Dto/Car.dto";

@Injectable()
export class CarRepository {
  @Inject()
  private readonly knexConfig: KnexConfig;
  getAllCars() {
    const knex = this.knexConfig.instance;
    return knex.select().from("cars");
  }
  getOneCars(id: ICarId) {
    const knex = this.knexConfig.instance;
    return knex.select().from("cars").where("id", id.id);
  }
  createCar(car: CreateCarDto) {
    const knex = this.knexConfig.instance;
    return knex("cars").insert(car);
  }
  updateCar(car: CreateCarDto, id: ICarId) {
    const knex = this.knexConfig.instance;
    return knex("cars").where("id", id.id).update(car);
  }
  deleteCar(id: { id: string }) {
    const knex = this.knexConfig.instance;
    return knex.delete().from("cars").where({ id: id.id });
  }
}
