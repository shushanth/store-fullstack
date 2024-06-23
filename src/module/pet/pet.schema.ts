import { Schema, Prop, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Pet {
  @Prop({ required: true })
  name: string;

  @Prop(
    raw([
      {
        name: String,
      },
    ]),
  )
  category: Record<string, any>[];

  @Prop({ required: true })
  photoUrls: { name: string }[];

  @Prop(
    raw([
      {
        name: String,
      },
    ]),
  )
  tags: Record<string, any>[];

  @Prop({ required: true })
  status: string[];
}

export type PetDocument = HydratedDocument<Pet>;

export const PetSchema = SchemaFactory.createForClass(Pet);
