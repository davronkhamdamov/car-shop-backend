import { ApiProperty, OmitType } from "@nestjs/swagger";
import { ICart } from "../interface/cart.interface";

export class CartDto implements ICart {
  @ApiProperty({
    type: String,
    default: "uuid",
  })
  id?: string;
  @ApiProperty({
    type: String,
    default: "uuid",
  })
  car_id: string;
  @ApiProperty({
    type: String,
    default: 1,
  })
  count: number;
}
export class createCartDto extends OmitType(CartDto, ["id"]) {}
export class updateCartDto extends OmitType(CartDto, ["count"]) {}
