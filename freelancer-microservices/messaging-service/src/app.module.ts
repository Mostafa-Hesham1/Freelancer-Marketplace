import { Module } from '@nestjs/common';
import { MessagesModule } from './modules/messages.module';
import { AppService } from './services/app.service';
import { AppController } from './controllers/app.controller';

@Module({
  imports: [MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}