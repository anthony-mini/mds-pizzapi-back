import {
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  ManyToMany,
  OneToMany,
  JoinTable,
  Index,
  Column,
  TableInheritance,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Story } from './story.entity';
import { Review } from './review.entity';
import { Ingredient } from './ingredient.entity';

@Entity()
@TableInheritance({ column: { type: 'varchar', name: 'type' } }) // Colonnes discriminantes
// Recipe est une class abstraite avec des colonnes disciminantes
export abstract class Recipe {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Story, (story) => story.recipe)
  story: Story;

  @OneToMany(() => Story, (review) => review.recipe)
  reviews: Review[];

  @ApiProperty()
  @ManyToMany(() => Ingredient, { eager: true })
  @JoinTable({
    name: 'recipe_ingredients',
    joinColumn: {
      name: 'recipe_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ingredient_id',
      referencedColumnName: 'id',
    },
  })
  ingredients: Ingredient[];

  @ApiProperty()
  @Index({ unique: true })
  @Column({ length: 100 })
  name: string;

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
