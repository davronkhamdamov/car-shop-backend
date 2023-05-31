import { Injectable } from '@nestjs/common';
import { AllCarDto, CreateCarDto, ICarId } from './Dto/Car.dto';
import { CurrentUserDto } from 'src/auth/dto/Corrent.userDto';

@Injectable()
export class CarsService {
  async getAllCar() {
    return [AllCarDto];
  }
  async createCar(car: CreateCarDto, userDI: CurrentUserDto) {
    return car;
  }
  async getOneDto() {
    return [AllCarDto];
  }
  async UpdateCar(car: CreateCarDto, id: ICarId) {
    return id;
  }
  async DeleteCar(car: CreateCarDto, id: ICarId) {
    return car;
  }
}
