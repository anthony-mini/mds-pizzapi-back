import { PizzaFlavor } from '../enums/pizza-flavor.enum';

export class CreatePizzaDto {
  name: string;
  flavor: PizzaFlavor;
  speciality: boolean;
  price: number;
  end?: Date;
}
