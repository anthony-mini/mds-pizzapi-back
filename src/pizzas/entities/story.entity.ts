import { ApiProperty } from '@nestjs/swagger';
import {
  Index,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  Column,
} from 'typeorm';
import { Entity } from 'typeorm';
import { Recipe } from './recipe.entity';

@Entity()
export class Story {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 500 })
  anecdote!: string;

  @ApiProperty()
  @Index()
  @Column({ length: 100 })
  city?: string;

  @OneToOne(() => Recipe, (recipe) => recipe.story)
  @JoinColumn()
  recipe: Recipe;
}
