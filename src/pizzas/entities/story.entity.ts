import { ApiProperty } from '@nestjs/swagger';
import {
  Index,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
  Column,
} from 'typeorm';
import { Pizza } from './pizza.entity';
import { Entity } from 'typeorm';

@Entity()
export class Story {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Pizza)
  @JoinColumn()
  pizza: Pizza;

  @ApiProperty()
  @Column({ length: 500 })
  anecdote!: string;

  @ApiProperty()
  @Index()
  @Column({ length: 100 })
  city?: string;
}
