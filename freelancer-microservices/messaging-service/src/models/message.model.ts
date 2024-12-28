export class Message {
  constructor(
    public id: string,
    public content: string,
    public senderId: string,
    public receiverId: string,
    public timestamp: Date,
  ) {}
}
