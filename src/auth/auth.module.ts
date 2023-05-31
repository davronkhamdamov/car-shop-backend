import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { KnexConfigModule } from 'src/knex/knex.module';

@Module({
  imports: [KnexConfigModule],
  providers: [AuthService, AuthRepository],
  controllers: [AuthController],
})
export class AuthModule {}
