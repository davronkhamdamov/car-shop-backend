import { Injectable } from '@nestjs/common';
import { AllModelDto, CreateModelDto, IModelId } from './Dto/Model.dto';
import { CurrentUserDto } from 'src/auth/dto/Corrent.userDto';

@Injectable()
export class ModelService {
  async getAllModel() {
    return [AllModelDto];
  }
  async createModel(model: CreateModelDto, modelId: CurrentUserDto) {
    return model;
  }
  async getOneModel() {
    return [AllModelDto];
  }
  async UpdateModel(model: CreateModelDto, ModelId: IModelId) {
    return ModelId;
  }
  async DeleteModel(modelId: IModelId) {
    return modelId;
  }
}
