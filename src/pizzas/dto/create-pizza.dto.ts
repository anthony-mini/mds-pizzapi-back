import { MaxLength } from 'class-validator';
import { PizzaFlavor } from '../enums/pizza-flavor.enum';
import { IsNotEmpty, IsDefined, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreatePizzaDto {
  @ApiProperty()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @ApiProperty()
  @IsDefined()
  flavor: PizzaFlavor;

  @ApiProperty()
  speciality: boolean;

  @ApiProperty()
  @IsDefined()
  @Min(0)
  price: number;

  @ApiProperty()
  end?: Date;
}
