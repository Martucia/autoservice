import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: false,
    credentials: true,
  });

  // const configService = app.get(ConfigService);
  const port = process.env.APP_PORT;

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port || 3000, () => {
    console.log(`🐝 🌈 🌧️  Server started on PORT: ${port || 3000} 🔥 🍓 🐣`);
  });
}
bootstrap();
