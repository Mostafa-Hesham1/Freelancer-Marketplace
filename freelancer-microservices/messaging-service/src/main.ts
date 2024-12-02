import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../.env' });

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoClient } from 'mongodb';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const mongoUrl = process.env.MONGO_URL;
  if (!mongoUrl) {
    console.error('MONGO_URL is not defined in the environment variables');
    process.exit(1);
  }

  const client = new MongoClient(mongoUrl);
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }

  await app.listen(process.env.PORT ?? 6000);
}
bootstrap();
