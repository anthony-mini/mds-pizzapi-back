import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activation de la validation des DTO
  app.useGlobalPipes(new ValidationPipe());

  // Activation de Swagger
  const doc = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Pizza API')
      .setDescription('Une API de démonstration de gestion des pizzas')
      .setVersion('1.0')
      .addTag('Pizza')
      .build(),
  );
  SwaggerModule.setup('docs', app, doc);

  await app.listen(process.env.PORT || 3100);
}
bootstrap();
