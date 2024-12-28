import { Module } from '@nestjs/common';
import { MessageService } from '../services/message.service';
import { MessageController } from '../controllers/message.controller';

@Module({
  providers: [MessageService],
  controllers: [MessageController],
})
export class MessagesModule {}
