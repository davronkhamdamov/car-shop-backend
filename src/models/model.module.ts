import { Module } from "@nestjs/common";
import { ModelService } from "./model.service";
import { ModelController } from "./model.controller";
import { ModelRepository } from "./model.repository";
import { KnexConfig } from "../knex/knex.config";

@Module({
  providers: [ModelService, KnexConfig, ModelRepository],
  controllers: [ModelController],
})
export class ModelModule {}
