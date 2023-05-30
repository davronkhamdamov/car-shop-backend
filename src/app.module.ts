import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CarsController } from './cars/cars.controller';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [AuthModule, CarsModule],
})
export class AppModule {}
