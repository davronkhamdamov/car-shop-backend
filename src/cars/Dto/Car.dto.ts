import { OmitType, ApiProperty } from "@nestjs/swagger";
import { ICar } from "../interface/car.interface";
export class ICarId {
  @ApiProperty({
    type: String,
  })
  id: { id: string };
}
class ICarDto implements ICar {
  @ApiProperty({
    type: String,
    default: "uuid",
  })
  id?: string;

  @ApiProperty({
    type: String,
    default: "Malibu",
  })
  title: string;

  @ApiProperty({
    type: String,
    default: "1000$",
  })
  price: string;

  @ApiProperty({
    type: String,
    default: "1.6",
  })
  motor: string;

  @ApiProperty({
    type: String,
    default: "Black",
  })
  color: string;

  @ApiProperty({
    type: String,
    default: "Avtomat karobka",
  })
  gearbook: string;

  @ApiProperty({
    type: String,
    default: "Some text about the car",
  })
  deseription: string;

  @ApiProperty({
    type: String,
    default: true,
  })
  tanirovkasi: boolean;

  @ApiProperty({
    type: String,
    default: "2018",
  })
  year: string;

  @ApiProperty({
    type: String,
    default: "3000km",
  })
  distance: string;

  @ApiProperty({
    type: String,
    default: "https://picsum.photos/300/300",
  })
  baseimgurl: string;

  @ApiProperty({
    type: String,
    description: "We recommend 200x200 images",
    default: "https://picsum.photos/300/300",
  })
  insideimgurl: string;

  @ApiProperty({
    type: String,
    description: "We recommend 200x200 images",
    default: "https://picsum.photos/300/300",
  })
  outsideimgurl: string;
  @ApiProperty({
    type: String,
    default: "uuid",
  })
  modelid: string;
}
export class CreateCarDto extends OmitType(ICarDto, ["id"]) {}
export class AllCarDto extends ICarDto {}
