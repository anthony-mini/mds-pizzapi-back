import { Entity, PrimaryGeneratedColumn, Index, Column } from 'typeorm';

@Entity()
export class Pizza {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({ length: 100 })
  name: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: false })
  speciality: boolean;

  @Column()
  price: number;

  @Column({ nullable: true })
  end?: Date;
}
