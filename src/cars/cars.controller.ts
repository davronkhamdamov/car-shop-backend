import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CarsService } from "./cars.service";
import { CreateCarDto, ICarId, AllCarDto } from "./Dto/Car.dto";
import { AuthorizationGuard } from "src/auth/guard/Auth.guard";

@ApiBearerAuth()
@ApiTags("Car")
@Controller("car")
@UseGuards(AuthorizationGuard)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @ApiResponse({
    status: 200,
    description: "All cars will be returned",
    type: [AllCarDto],
  })
  @Get("/all")
  async AllCar() {
    return await this.carsService.getAllCar();
  }
  @ApiResponse({
    status: 200,
    description: "All cars will be returned",
    type: [AllCarDto],
  })
  @Get("one/:id")
  async oneCar(@Param() id: ICarId) {
    return await this.carsService.getOneCar(id);
  }

  @ApiResponse({
    status: 201,
    description: "Car create",
    type: [AllCarDto],
  })
  @Post("create")
  async createCar(@Body() car: CreateCarDto) {
    return this.carsService.createCar(car);
  }
  @ApiResponse({
    status: 201,
    description: "Car update",
  })
  @Put("update/:id")
  async UpdateCar(@Body() car: CreateCarDto, @Param() id: ICarId) {
    return this.carsService.UpdateCar(car, id);
  }
  @ApiResponse({
    status: 200,
    description: "Car delete",
  })
  @Delete("delete/:id")
  async DeleteCar(@Param() id: { id: string }) {
    return this.carsService.DeleteCar(id);
  }
}
