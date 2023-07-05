import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProductModule } from './equipments/equipments.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/controller/auth.controller';
import { EquipmentsController } from './equipments/controller/equipments.controller';
import { CartController } from './cart/controller/cart.controller';
import { OrderController } from './order/controller/order.controller';
import { FilterMiddleware } from './core/middleware/Filter';
import { OrderMiddleware } from './core/middleware/Order';
import { RolesGuard } from './core/guard/roles.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    AuthModule,
    ProductModule,
    CartModule,
    OrderModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'storeMandalorianDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [
    AppController,
    AuthController,
    EquipmentsController,
    CartController,
    OrderController,
  ],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(FilterMiddleware, OrderMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.GET });
  }
}
