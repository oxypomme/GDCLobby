import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error'],
  });

  const options = new DocumentBuilder()
    .setTitle('GDCLobby API')
    .setDescription('Simple API for GDCLobby')
    .setVersion('1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/doc', app, document, {
    customSiteTitle: 'GDCLobby API',
  });

  await app.listen(3000);
  console.log('Server ready');
}
bootstrap();
