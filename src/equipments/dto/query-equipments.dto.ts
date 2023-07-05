import { Type } from 'class-transformer';
import { IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OrderByParamsDTO } from 'src/core/dto/order-by.dto';
import { EquipmentsDTO } from './equipments.dto';

export class QueryEquipmentsDTO extends OrderByParamsDTO<EquipmentsDTO> {
  @ApiProperty()
  search: string;

  @ApiProperty()
  minRating: number;

  @ApiProperty()
  maxRating: number;

  @ApiProperty()
  minPrice: number;

  @ApiProperty()
  maxPrice: number;

  @IsBoolean()
  @Type(() => Boolean)
  isAvailable: boolean;
}
