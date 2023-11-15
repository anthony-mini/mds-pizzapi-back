import {
  Entity,
  PrimaryGeneratedColumn,
  Index,
  Column,
  OneToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { PizzaFlavor } from '../enums/pizza-flavor.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Story } from './story.entity';
import { Review } from './review.entity';
import { Ingredient } from './ingredient.entity';

@Entity()
export class Pizza {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Story, (story) => story.pizza)
  story: Story;

  @OneToMany(() => Story, (review) => review.pizza)
  reviews: Review[];

  @ApiProperty()
  @ManyToMany(() => Ingredient)
  @JoinTable()
  ingredients: Ingredient[];

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
