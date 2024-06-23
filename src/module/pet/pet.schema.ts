import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pet {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  category: { name: string }[];

  @Prop({ required: true })
  photoUrls: { name: string }[];

  @Prop({ required: true })
  tags: { name: string }[];

  @Prop({ required: true })
  status: string[];
}

export type PetDocument = Pet & Document;

export const PetSchema = SchemaFactory.createForClass(Pet);
