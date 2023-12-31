import { Module } from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { PizzasController } from './pizzas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';
import { Story } from './entities/story.entity';
import { Review } from './entities/review.entity';
import { Ingredient } from './entities/ingredient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pizza, Ingredient, Review, Story])],
  controllers: [PizzasController],
  providers: [PizzasService],
})
export class PizzasModule {}
