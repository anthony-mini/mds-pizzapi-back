import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PizzasService } from './pizzas.service';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOperation,
} from '@nestjs/swagger';
import { Pizza } from './entities/pizza.entity';

@Controller('pizzas')
export class PizzasController {
  constructor(private readonly pizzasService: PizzasService) {}

  // POST
  @ApiOperation({ description: 'Add a Pizza to the menu' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Pizza,
  })
  @Post()
  create(@Body() createPizzaDto: CreatePizzaDto): Promise<Pizza> {
    return this.pizzasService.create(createPizzaDto);
  }

  // GET ALL
  @ApiOperation({ description: 'Get all pizzas' })
  @ApiCreatedResponse({
    description: 'The records have been successfully retrieved.',
    type: [Pizza],
  })
  @Get()
  findAll(): Promise<Pizza[]> {
    return this.pizzasService.findAll();
  }

  // GET ONE
  @ApiOperation({ description: 'Find a pizza in the menu' })
  @ApiCreatedResponse({
    description: 'The Pizza',
    type: Pizza,
  })
  @ApiNotFoundResponse({
    description: 'The Pizza does not exist',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pizzasService.findOne(+id);
  }

  // UPDATE
  @ApiOperation({ description: 'Update a pizza in the menu' })
  @ApiNotFoundResponse({
    description: 'The Pizza does not exist',
  })
  @ApiCreatedResponse({
    description: 'The Pizza has been successfully updated.',
    type: Pizza,
  })
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePizzaDto: UpdatePizzaDto,
  ): Promise<Pizza> {
    return this.pizzasService.update(+id, updatePizzaDto);
  }

  // DELETE

  @ApiOperation({ description: 'Delete a pizza from the menu' })
  @ApiNotFoundResponse({
    description: 'The Pizza does not exist',
  })
  @ApiCreatedResponse({
    description: 'The Pizza has been successfully deleted.',
    type: Pizza,
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pizzasService.remove(+id);
  }
}
