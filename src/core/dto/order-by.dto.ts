export class OrderByParamsDTO<T> {
  orderBy: keyof T;
  sort: 'DESC' | 'ASC';
}
