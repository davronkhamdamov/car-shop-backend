import { ApiProperty } from "@nestjs/swagger";

export class CurrentUserDto {
  @ApiProperty({
    type: String,
  })
  id: { id: string };
}
