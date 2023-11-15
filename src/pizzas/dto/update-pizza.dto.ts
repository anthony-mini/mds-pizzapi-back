import { PartialType } from '@nestjs/mapped-types';
import { CreatePizzaDto } from './create-pizza.dto';
import { PizzaFlavor } from '../enums/pizza-flavor.enum';

export class UpdatePizzaDto extends PartialType(CreatePizzaDto) {
  name: string;
  flavor: PizzaFlavor;
  speciality: boolean;
  price: number;
  end?: Date;
}
