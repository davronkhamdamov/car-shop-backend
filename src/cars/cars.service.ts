import { Injectable } from "@nestjs/common";
import { CreateCarDto, ICarId } from "./Dto/Car.dto";
import { CurrentUserDto } from "src/auth/dto/Corrent.userDto";
import { CarRepository } from "./cars.repository";
import { CartRepository } from "src/cart/cart.repository";

@Injectable()
export class CarsService {
  constructor(
    private CarRepository: CarRepository,
    private CartRepository: CartRepository
  ) {}
  async getAllCar() {
    const cars = await this.CarRepository.getAllCars();
    return cars.reverse();
  }
  async getOneCar(id: ICarId) {
    const car = await this.CarRepository.getOneCars(id);
    if (!car[0]) {
      return {
        status: 404,
        message: "Car not found",
      };
    }
    return car;
  }
  async createCar(car: CreateCarDto) {
    await this.CarRepository.createCar(car);
    return {
      message: "Car successfully created",
    };
  }
  async UpdateCar(car: CreateCarDto, id: ICarId) {
    await this.CarRepository.updateCar(car, id);
    return this.getAllCar();
  }
  async DeleteCar(id: { id: string }) {
    const data = await this.CartRepository.deleteCartByCarId(id);
    if (!data.error) {
      await this.CarRepository.deleteCar(id);
      return this.getAllCar();
    }
    return {
      status: 500,
      message: "Something wrong went",
    };
  }
}
