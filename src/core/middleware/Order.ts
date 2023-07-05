import { NestMiddleware } from '@nestjs/common';
import { Router, Request, Response, NextFunction } from 'express';

export class OrderMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const order_field = req.query.orderBy as string;
    if (order_field) {
      const order = {};

      order[order_field] = null;

      let order_type = req.query.sort;
      if (!order_type) {
        order_type = 'asc';
      }
      order[order_field] = order_type;

      req['order'] = order;
    } else {
      const order = {};
      order['id'] = 'asc';
      req['order'] = order;
      //req['order'] = null;
    }

    next();
  }
}
