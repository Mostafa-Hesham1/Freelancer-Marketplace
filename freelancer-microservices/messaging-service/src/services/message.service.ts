import { Injectable } from '@nestjs/common';
import { Message } from '../models/message.model';

@Injectable()
export class MessageService {
  private messages: Message[] = [];

  createMessage(content: string, senderId: string, receiverId: string): Message {
    const message = new Message(
      (this.messages.length + 1).toString(),
      content,
      senderId,
      receiverId,
      new Date(),
    );
    this.messages.push(message);
    return message;
  }

  getMessages(): Message[] {
    return this.messages;
  }

  getMessagesForUser(userId: string): Message[] {
    return this.messages.filter(
      message => message.senderId === userId || message.receiverId === userId
    );
  }
}