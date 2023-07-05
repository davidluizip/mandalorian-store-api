export class QueryParamsDTO<T> {
  filtro: T;
  order: orderBy<T>;
}

type orderBy<T> = {
  [K in keyof T]?: 'DESC' | 'ASC';
};
