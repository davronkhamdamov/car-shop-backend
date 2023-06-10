import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { CarsModule } from "./cars/cars.module";
import { ModelModule } from "./models/model.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule } from "@nestjs/config";
import { UsersModule } from "./users/users.module";
import { CartService } from "./cart/cart.service";
import { CartModule } from "./cart/cart.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      global: true,
      signOptions: {
        expiresIn: "1h",
      },
    }),
    AuthModule,
    CarsModule,
    ModelModule,
    UsersModule,
    CartModule,
  ],
})
export class AppModule {}
