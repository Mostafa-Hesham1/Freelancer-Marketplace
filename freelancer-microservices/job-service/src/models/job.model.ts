import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Job extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  priceType: string;

  @Prop({ required: true })
  posterName: string;

  @Prop({ required: true })
  posterEmail: string;

  @Prop({ type: [{ userId: String, coverLetter: String, hourlyRate: Number, estimatedHours: Number, createdAt: { type: Date, default: Date.now } }] })
  proposals: {
    userId: string;
    coverLetter: string;
    hourlyRate: number;
    estimatedHours: number;
    createdAt: Date;
  }[];
}

export const JobSchema = SchemaFactory.createForClass(Job);
