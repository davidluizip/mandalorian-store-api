import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class FilterMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const reservedWord: Array<string> = ['orderBy', 'sort'];

    const filter = {};
    let qtd = 0;

    for (const key in req.query) {
      const result = reservedWord.filter((item) => item == key);
      if (result.length == 0 && req.query[key] != '') {
        filter[key] = req.query[key];
        qtd++;
      }
    }
    if (qtd > 0) {
      req['filtro'] = filter;
    } else {
      req['filtro'] = null;
    }
    next();
  }
}
