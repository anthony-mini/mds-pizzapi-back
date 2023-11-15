import { MaxLength } from 'class-validator';
import { PizzaFlavor } from '../enums/pizza-flavor.enum';
import { IsNotEmpty, IsDefined, Min } from 'class-validator';
export class CreatePizzaDto {
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsDefined()
  flavor: PizzaFlavor;

  speciality: boolean;

  @IsDefined()
  @Min(0)
  price: number;

  end?: Date;
}
