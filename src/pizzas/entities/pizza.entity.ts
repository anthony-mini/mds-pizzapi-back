import { Entity, PrimaryGeneratedColumn, Index, Column } from 'typeorm';
import { PizzaFlavor } from '../enums/pizza-flavor.enum';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Pizza {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Index({ unique: true })
  @Column({ length: 100 })
  name: string;

  @ApiProperty()
  @Index()
  @Column({ type: 'enum', enum: PizzaFlavor })
  flavor: PizzaFlavor;

  @ApiProperty()
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @ApiProperty()
  @Column({ default: false })
  speciality: boolean;

  @ApiProperty()
  @Column()
  price: number;

  @ApiProperty()
  @Column({ nullable: true })
  end?: Date;
}
