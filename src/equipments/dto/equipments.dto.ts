import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class EquipmentsDTO {
  constructor(obj: any) {
    Object.assign(obj, this);
  }
  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    type: String,
    required: false,
  })
  @IsString()
  quantity: string;

  @ApiProperty({
    type: Number,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  rating: number;

  @ApiProperty({
    type: Boolean,
    required: false,
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isAvailable = true;
}
