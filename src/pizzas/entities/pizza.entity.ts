import { Entity, PrimaryGeneratedColumn, Index, Column } from 'typeorm';
import { PizzaFlavor } from '../enums/pizza-flavor.enum';

@Entity()
export class Pizza {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ length: 100 })
  name: string;

  @Index()
  @Column({ type: 'enum', enum: PizzaFlavor })
  flavor: PizzaFlavor;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ default: false })
  speciality: boolean;

  @Column()
  price: number;

  @Column({ nullable: true })
  end?: Date;
}
