import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Pizza } from './pizza.entity';

@Entity()
export class Review {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 100 })
  name!: string;

  @ManyToOne(() => Pizza, (pizza) => pizza.reviews)
  pizza: Pizza;
}
