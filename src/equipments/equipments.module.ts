import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentsEntity } from './entity/equipments.entity';
import { EquipmentsController } from './controller/equipments.controller';
import { EquipmentsService } from './service/equipments.service';

@Module({
  imports: [TypeOrmModule.forFeature([EquipmentsEntity])],
  controllers: [EquipmentsController],
  providers: [EquipmentsService],
  exports: [EquipmentsService],
})
export class ProductModule {}
