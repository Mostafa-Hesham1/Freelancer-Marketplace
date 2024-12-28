import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessageService } from '../services/message.service';
import { Message } from '../models/message.model';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  createMessage(
    @Body('content') content: string,
    @Body('senderId') senderId: string,
    @Body('receiverId') receiverId: string,
  ): Message {
    return this.messageService.createMessage(content, senderId, receiverId);
  }

  @Get(':userId')
  getMessages(@Param('userId') userId: string): Message[] {
    return this.messageService.getMessagesForUser(userId);
  }
}