import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PizzasModule } from './pizzas/pizzas.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'pizzapi',
      username: 'root',
      password: 'root',
      port: 8889,
      host: 'localhost',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ConfigModule.forRoot(),
    PizzasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
