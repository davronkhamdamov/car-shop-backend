import { OmitType, ApiProperty } from "@nestjs/swagger";
import { IModel } from "../interface/car.interface";

export class MedelId {
  @ApiProperty({
    type: String,
  })
  id: { id: string };
}

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
  modelimgurl: string;
}
export class CreateModelDto extends OmitType(IModelDto, ["id"]) {}
export class AllModelDto extends IModelDto {}
