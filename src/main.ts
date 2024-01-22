import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as path from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.use('/songs', express.static(path.join(process.cwd(), 'static/songs')));

  const options = new DocumentBuilder()
    .setTitle('Skillbox Player API')
    .setDescription('Skillbox player api')
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(process.env.PORT);
  console.log('streaming_service_api listen port', process.env.PORT);
}

bootstrap();
