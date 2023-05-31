import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { ApiBearerAuth, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ModelService } from "./model.service";
import { AllModelDto, CreateModelDto, IModelId } from "./Dto/Model.dto";
import { AuthorizationGuard } from "src/auth/guard/Auth.guard";
import { CurrentUser } from "../auth/guard/auth.decorator";
import { CurrentUserDto } from "src/auth/dto/Corrent.userDto";

@ApiBearerAuth()
@ApiTags("Model")
@Controller("model")
@UseGuards(AuthorizationGuard)
export class ModelController {
  constructor(private readonly modelService: ModelService) {}
  @ApiResponse({
    status: 200,
    description: "All models will be returned",
    type: [AllModelDto],
  })
  @Get("all")
  async Allmodel() {
    return this.modelService.getAllModel();
  }
  @ApiResponse({
    status: 200,
    description: "One model be returned",
    type: AllModelDto,
  })
  @Get(":id")
  async oneModel(@Param() id: IModelId) {
    return this.modelService.getAllModel();
  }
  @ApiResponse({
    status: 201,
    description: "model create",
    type: [AllModelDto],
  })
  @Post("create")
  async createmodel(
    @Body() model: CreateModelDto,
    @CurrentUser() userDI: CurrentUserDto
  ) {
    return this.modelService.createModel(model, userDI);
  }
  @ApiResponse({
    status: 201,
    description: "model update",
  })
  @Put("update")
  async Updatemodel(@Body() model: CreateModelDto, @Param() id: IModelId) {
    return this.modelService.UpdateModel(model, id);
  }
  @ApiResponse({
    status: 200,
    description: "model delete",
  })
  @Delete("delete")
  async Deletemodel(@Param() id: IModelId) {
    return this.modelService.DeleteModel(id);
  }
}
