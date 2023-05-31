import { OmitType, ApiProperty, PickType } from '@nestjs/swagger';
import { ICar } from '../interface/car.interface';

class ICarDto implements ICar {
  @ApiProperty({
    type: String,
    default: 'uuid',
  })
  id?: string;
  @ApiProperty({
    type: String,
    default: 'Malibu',
  })
  title: string;
  @ApiProperty({
    type: String,
    default: '1000$',
  })
  price: string;
}
export class CreateCarDto extends OmitType(ICarDto, ['id']) {}
export class AllCarDto extends ICarDto {}
export class ICarId extends PickType(ICarDto, ['id']) {}
