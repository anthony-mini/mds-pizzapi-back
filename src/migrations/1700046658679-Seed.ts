import { Pizza } from '../pizzas/entities/pizza.entity';
import { PizzaFlavor } from '../pizzas/enums/pizza-flavor.enum';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Seed1700046658679 implements MigrationInterface {
  public async up(run: QueryRunner): Promise<void> {
    await run.manager.save(
      run.manager.create<Pizza>(Pizza, {
        name: 'Pizza della mama',
        flavor: PizzaFlavor.Tomatoas,
        price: 13,
      }),
    );
  }

  public async down(): Promise<void> {
    // nothing
  }
}
