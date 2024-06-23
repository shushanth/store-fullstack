import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';
import { Pet, PetSchema } from './pet.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pet.name,
        schema: PetSchema,
      },
    ]),
  ],
  providers: [PetService],
  controllers: [PetController],
})
export class PetModule {}
