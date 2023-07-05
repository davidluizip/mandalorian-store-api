import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/auth/entity/user.entity';
import { CartEntity } from 'src/cart/entity/cart.entity';
import { EquipmentsEntity } from 'src/equipments/entity/equipments.entity';
import { CartController } from './controller/cart.controller';
import { CartService } from './service/cart.service';
import { EquipmentsService } from 'src/equipments/service/equipments.service';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, Users, EquipmentsEntity])],
  controllers: [CartController],
  providers: [CartService, EquipmentsService],
  exports: [CartService],
})
export class CartModule {}
