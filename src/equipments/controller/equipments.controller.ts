import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Request,
  Body,
  UseGuards,
  Query,
  Req,
} from '@nestjs/common';
import { UpdateResult, DeleteResult } from 'typeorm';
import { JwtAuthGuard } from 'src/core/guard/ jwt-auth.guard';
import { EquipmentsService } from 'src/equipments/service/equipments.service';
import { EquipmentsEntity } from '../entity/equipments.entity';
import { QueryEquipmentsDTO } from '../dto/query-equipments.dto';
import { EquipmentsDTO } from '../dto/equipments.dto';
import { Roles } from 'src/core/decorators';
import { ProfileUserEnum } from 'src/core/enums/profile-user.enum';

@Controller('api/v1/equipments')
export class EquipmentsController {
  constructor(private equipmentsService: EquipmentsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  // @Roles(ProfileUserEnum.ADMIN) TODO falta implementar
  async GetAll(@Req() req: Request): Promise<EquipmentsEntity[]> {
    return await this.equipmentsService.getAll({
      filtro: new EquipmentsDTO(req['filtro']),
      order: req['order'],
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @Roles(ProfileUserEnum.ADMIN)
  async Create(
    @Request() req,
    @Body() product: EquipmentsDTO,
  ): Promise<EquipmentsEntity> {
    return await this.equipmentsService.create(product, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async GetOne(@Param() id: number): Promise<EquipmentsEntity> {
    return await this.equipmentsService.getOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async Update(
    @Param() id: number,
    @Body() product: EquipmentsEntity,
    @Request() req,
  ): Promise<UpdateResult> {
    return await this.equipmentsService.update(id, product, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async Delete(@Param() id: number, @Request() req): Promise<DeleteResult> {
    return await this.equipmentsService.delete(id, req.user);
  }
}
