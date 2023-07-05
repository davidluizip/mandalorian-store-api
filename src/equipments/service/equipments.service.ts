import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/auth/entity/user.entity';
import { EquipmentsEntity } from 'src/equipments/entity/equipments.entity';
import { QueryParamsDTO } from 'src/core/dto/query-params.dto';
import { EquipmentsDTO } from '../dto/equipments.dto';

@Injectable()
export class EquipmentsService {
  constructor(
    @InjectRepository(EquipmentsEntity)
    private equipmentsRepository: Repository<EquipmentsEntity>,
  ) {}

  async getAll(
    params: QueryParamsDTO<EquipmentsDTO>,
  ): Promise<EquipmentsEntity[]> {
    return await this.equipmentsRepository.find({
      where: params.filtro,
      order: params.order,
    });
  }

  async create(product: EquipmentsDTO, user: Users): Promise<EquipmentsEntity> {
    if (user.role == 'admin') {
      return await this.equipmentsRepository.save(product);
    }
    throw new UnauthorizedException();
  }

  async getOne(id: number): Promise<EquipmentsEntity> {
    return this.equipmentsRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    product: EquipmentsEntity,
    user: Users,
  ): Promise<UpdateResult> {
    if (user.role == 'admin') {
      return await this.equipmentsRepository.update(id, product);
    }
    throw new UnauthorizedException();
  }

  async delete(id: number, user: Users): Promise<DeleteResult> {
    if (user.role == 'admin') {
      return await this.equipmentsRepository.delete(id);
    }
    throw new UnauthorizedException();
  }
}
