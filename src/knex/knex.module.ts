import { Module } from '@nestjs/common';
import { KnexConfig } from './knex.config';

@Module({
  providers: [KnexConfig],
  exports: [KnexConfig],
})
export class KnexConfigModule {}
