import { Users } from 'src/auth/entity/user.entity';
import { EquipmentsEntity } from 'src/equipments/entity/equipments.entity';
import {
  Entity,
  OneToMany,
  JoinColumn,
  OneToOne,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @OneToMany((type) => EquipmentsEntity, (item) => item.id)
  items: EquipmentsEntity[];

  @OneToOne((type) => Users, (user) => user.username)
  @JoinColumn()
  user: Users;

  @Column()
  subTotal: number;

  @Column({ default: false })
  pending: boolean;
}
