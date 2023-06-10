import { Inject, Injectable } from "@nestjs/common";
import { KnexConfig } from "src/knex/knex.config";
import { CreateModelDto, MedelId } from "./Dto/Model.dto";

@Injectable()
export class ModelRepository {
  @Inject()
  private readonly KnexConfig: KnexConfig;

  getAllModel() {
    const knex = this.KnexConfig.instance;
    return knex.select().from("model");
  }
  getOneModel(id: MedelId) {
    const knex = this.KnexConfig.instance;
    return knex.select().from("model").where("id", id.id);
  }
  getAllCarByModelId(id: MedelId) {
    const knex = this.KnexConfig.instance;
    return knex.select().from("cars").where("modelid", id.id);
  }
  createModel(model: CreateModelDto) {
    const knex = this.KnexConfig.instance;
    return knex("model").insert(model);
  }
  updateModel(model: CreateModelDto, id: MedelId) {
    const knex = this.KnexConfig.instance;
    return knex("model")
      .where("id", id.id)
      .update(model)
      .then((data: any) => data)
      .catch((er: any) => {
        return { error: true, message: er.message };
      });
  }
  deleteModel(id: MedelId) {
    const knex = this.KnexConfig.instance;
    return knex
      .delete()
      .from("model")
      .where({ id: id.id })
      .then((data: any) => data)
      .catch((er: any) => {
        return { error: true, message: er.message };
      });
  }
}
