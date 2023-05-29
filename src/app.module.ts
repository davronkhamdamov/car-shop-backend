import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CarsController } from './cars/cars.controller';
import { CarsModule } from './cars/cars.module';

@Module({
  imports: [AuthModule, CarsModule],
  controllers: [AppController, CarsController],
  providers: [AppService],
})
export class AppModule {}
