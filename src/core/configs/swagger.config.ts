import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export function swaggerMiddleware(app: INestApplication) {
  const swaggerDocumentBuilder = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API Mandalorian')
    .setDescription('API Mandalorian')
    .setVersion('1.0')
    .addServer('http://localhost:3000')
    .setContact('DavidOliveira  ', '', 'davidluizip@gmail.com')
    .build();

  const swaggerDocumentOptions: SwaggerDocumentOptions = {
    operationIdFactory: (_controllerKey: string, methodKey: string) =>
      methodKey,
  };

  const swaggerDocument = SwaggerModule.createDocument(
    app,
    swaggerDocumentBuilder,
    swaggerDocumentOptions,
  );

  SwaggerModule.setup('swagger', app, swaggerDocument);
}
