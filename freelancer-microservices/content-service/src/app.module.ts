import { Module } from '@nestjs/common';
import { ContentModule } from './modules/content/content.module';

@Module({
  imports: [ContentModule],
})
export class AppModule {}