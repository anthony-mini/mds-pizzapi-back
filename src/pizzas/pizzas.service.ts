import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pizza } from './entities/pizza.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PizzasService {
  constructor(@InjectRepository(Pizza) private data: Repository<Pizza>) {}

  async create(dto: CreatePizzaDto): Promise<Pizza> {
    try {
      return await this.data.save(dto);
    } catch (error) {
      throw new ConflictException();
    }
  }

  findAll(): Promise<Pizza[]> {
    return this.data.find();
  }

  async findOne(id: number): Promise<Pizza> {
    const found = await this.data.findOneBy({ id });
    if (!found) {
      throw new NotFoundException();
    } else {
      return found;
    }
  }

  async update(id: number, updatePizzaDto: UpdatePizzaDto): Promise<Pizza> {
    try {
      const done = await this.data.update(id, updatePizzaDto);
      if (done.affected != 1) throw new NotFoundException();
    } catch (error) {
      throw new ConflictException();
    }
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const done = await this.data.delete(id);
    if (done.affected != 1) throw new NotFoundException();
  }
}
