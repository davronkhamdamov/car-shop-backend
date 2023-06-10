import { Injectable } from "@nestjs/common";
import { CreateModelDto, MedelId } from "./Dto/Model.dto";
import { CurrentUserDto } from "src/auth/dto/Corrent.userDto";
import { ModelRepository } from "./model.repository";
@Injectable()
export class ModelService {
  constructor(private ModelRepository: ModelRepository) {}
  async getAllModel() {
    return await this.ModelRepository.getAllModel();
  }
  async getAllCarByModelId(id: MedelId) {
    return await this.ModelRepository.getAllCarByModelId(id);
  }
  async createModel(model: CreateModelDto, id: CurrentUserDto) {
    model["user_id"] = id.id;
    await this.ModelRepository.createModel(model);
    return {
      message: "Model successfully created",
    };
  }
  async getOneModel(id: MedelId) {
    const model = await this.ModelRepository.getOneModel(id);
    if (!model[0]) {
      return {
        message: "Model not found",
      };
    }
    return model[0];
  }
  async UpdateModel(model: CreateModelDto, id: MedelId) {
    const modelEr = await this.ModelRepository.updateModel(model, id);
    if (modelEr.error) {
      return modelEr;
    }
    return this.getAllModel();
  }
  async DeleteModel(id: MedelId) {
    const modelEr = await this.ModelRepository.deleteModel(id);
    if (modelEr.error) {
      return modelEr;
    }
    return this.getAllModel();
  }
}
