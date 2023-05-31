import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CarsModule } from './cars/cars.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      global: true,
      signOptions: {
        expiresIn: '1h',
      },
    }),
    AuthModule,
    CarsModule,
  ],
})
export class AppModule {}
