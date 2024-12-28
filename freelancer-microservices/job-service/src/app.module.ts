import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JobModule } from './modules/job.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 10000, 
      connectTimeoutMS: 10000, 
    }),
    JobModule,
  ],
})
export class AppModule {}