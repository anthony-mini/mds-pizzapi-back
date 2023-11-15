import { Index, Column, ChildEntity } from 'typeorm';
import { PizzaFlavor } from '../enums/pizza-flavor.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Recipe } from './recipe.entity';

@ChildEntity()
export class Calzone extends Recipe {
  @ApiProperty()
  @Index()
  @Column({ type: 'enum', enum: PizzaFlavor })
  flavor: PizzaFlavor;
}
