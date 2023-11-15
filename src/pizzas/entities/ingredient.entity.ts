import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity()
export class Ingredient {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty()
  @Column({ length: 100 })
  name!: string;

  @ApiProperty()
  @ManyToMany(() => Recipe)
  recipes: Recipe[];
}
