import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';

import { Site } from './site.entity';
import { TypeLieu } from '../enums/type-lieu.enum';

Entity();
export class Lieu {
  @PrimaryGeneratedColumn({ name: 'id_lieu' })
  id: number;

  @Column()
  nom: string;

  @Column()
  zone: string;

  @Index()
  @Column({ type: 'enum', enum: TypeLieu, name: 'id_type' })
  type: TypeLieu;

  @ManyToOne(() => Site, (site) => site.lieux)
  @JoinColumn({ name: 'id_site' })
  site: Site;
}
