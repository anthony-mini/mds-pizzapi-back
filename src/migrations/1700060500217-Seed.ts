// import { MigrationInterface, QueryRunner } from 'typeorm';
// import { Pizza } from '../pizzas/entities/pizza.entity';
// import { Calzone } from '../pizzas/entities/calzone.entity';
// import { Ingredient } from '../pizzas/entities/ingredient.entity';
// import { PizzaFlavor } from '../pizzas/enums/pizza-flavor.enum';

// export class Seed1700046658679 implements MigrationInterface {
//   public async up(run: QueryRunner): Promise<void> {
//     // Créez des instances d'ingrédients
//     const tomato = run.manager.create(Ingredient, { name: 'Tomato' });
//     const cheese = run.manager.create(Ingredient, { name: 'Cheese' });
//     const pepperoni = run.manager.create(Ingredient, {
//       name: 'Pepperoni',
//     });
//     // Sauvegardez les ingrédients
//     await run.manager.save([tomato, cheese, pepperoni]);

//     // Créez des instances de pizza
//     const pizza = run.manager.create(Pizza, {
//       name: 'Pizza Margherita',
//       flavor: PizzaFlavor.Tomatoas,
//       speciality: false,
//       price: 10,
//       ingredients: [tomato, cheese],
//     });

//     // Créez des instances de calzone
//     const calzone = run.manager.create(Calzone, {
//       name: 'Calzone Napoletano',
//       speciality: true,
//       flavor: PizzaFlavor.Crema,
//       price: 12,
//       ingredients: [tomato, cheese, pepperoni],
//     });

//     // Sauvegardez les pizzas et calzones
//     await run.manager.save([pizza, calzone]);
//   }

//   public async down(run: QueryRunner): Promise<void> {
//     // Supprimez toutes les pizzas et calzones
//     await run.manager.delete(Pizza, {});
//     await run.manager.delete(Calzone, {});

//     // Supprimez tous les ingrédients
//     await run.manager.delete(Ingredient, {});
//   }
// }
