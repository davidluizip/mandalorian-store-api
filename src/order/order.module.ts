import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/auth/entity/user.entity';
import { CartEntity } from 'src/cart/entity/cart.entity';
import { EquipmentsEntity } from 'src/equipments/entity/equipments.entity';
import { OrderEntity } from 'src/order/entity/order.entity';
import { OrderController } from './controller/order.controller';
import { OrderService } from './service/order.service';
import { CartService } from 'src/cart/service/cart.service';
import { EquipmentsService } from 'src/equipments/service/equipments.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OrderEntity,
      EquipmentsEntity,
      CartEntity,
      Users,
    ]),
  ],
  //controllers: [AbortController, OrderController],
  controllers: [OrderController],
  providers: [OrderService, CartService, EquipmentsService],
  exports: [OrderService],
})
export class OrderModule {}
