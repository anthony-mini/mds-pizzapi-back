import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Pizza } from './pizza.entity';

@Entity()
export class Ingredient {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty()
  @Column({ length: 100 })
  name!: string;

  @ApiProperty()
  @ManyToMany(() => Pizza)
  pizzas: Pizza[];
}
