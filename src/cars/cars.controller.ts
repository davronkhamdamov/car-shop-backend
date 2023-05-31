import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CreateCarDto, ICarId, AllCarDto } from './Dto/Car.dto';
import { AuthorizationGuard } from 'src/auth/guard/Auth.guard';
import { CurrentUser } from '../auth/guard/auth.decorator';
import { CurrentUserDto } from 'src/auth/dto/Corrent.userDto';

@ApiBearerAuth()
@ApiTags('Car')
@Controller('car')
@UseGuards(AuthorizationGuard)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @ApiResponse({
    status: 200,
    description: 'All cars will be returned',
    type: [AllCarDto],
  })
  @Get('all')
  async AllCar() {
    return this.carsService.getAllCar();
  }
  @ApiResponse({
    status: 201,
    description: 'Car create',
    type: [AllCarDto],
  })
  @Post('create')
  async createCar(
    @Body() car: CreateCarDto,
    @CurrentUser() userDI: CurrentUserDto,
  ) {
    return this.carsService.createCar(car, userDI);
  }
  @ApiResponse({
    status: 201,
    description: 'Car update',
  })
  @Put('update')
  async UpdateCar(@Body() car: CreateCarDto, @Param() id: ICarId) {
    return this.carsService.UpdateCar(car, id);
  }
  @ApiResponse({
    status: 200,
    description: 'Car delete',
  })
  @Delete('delete')
  async DeleteCar(@Body() car: CreateCarDto, @Param() id: ICarId) {
    return this.carsService.DeleteCar(car, id);
  }
}
