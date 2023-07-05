import { CartEntity } from 'src/cart/entity/cart.entity';
import {
  Entity,
  JoinColumn,
  OneToMany,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class EquipmentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: string;

  @Column({ nullable: true })
  rating?: number;

  @Column({
    default: true,
  })
  isAvailable: boolean;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updtedAt: string;

  @OneToMany((type) => CartEntity, (cart) => cart.id)
  @JoinColumn()
  cart: CartEntity[];
}
