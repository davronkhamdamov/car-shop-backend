import { OmitType, ApiProperty, PickType } from "@nestjs/swagger";
import { IModel } from "../interface/car.interface";

class IModelDto implements IModel {
  @ApiProperty({
    type: String,
    default: "uuid",
  })
  id?: string;
  @ApiProperty({
    type: String,
    default: "Chevrolet",
  })
  title: string;
  @ApiProperty({
    type: String,
    description: "We recommend 200x200 images",
    default: "https://picsum.photos/300/300",
  })
  modelImgUrl: string;
}
export class CreateModelDto extends OmitType(IModelDto, ["id"]) {}
export class AllModelDto extends IModelDto {}
export class IModelId extends PickType(IModelDto, ["id"]) {}
