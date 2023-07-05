import { Users } from 'src/auth/entity/user.entity';
import { EquipmentsEntity } from 'src/equipments/entity/equipments.entity';
import {
  Entity,
  ManyToOne,
  JoinColumn,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  total: number;

  @Column()
  quantity: number;

  @ManyToOne((type) => EquipmentsEntity, (order) => order.id)
  @JoinColumn()
  item: EquipmentsEntity;

  @ManyToOne((type) => Users, (user) => user.username)
  @JoinColumn()
  user: Users;
}
