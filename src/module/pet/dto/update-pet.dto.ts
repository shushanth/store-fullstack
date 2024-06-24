import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId } from 'class-validator';
import { CreatePetDTO } from './create-pet.dto';

export class UpdatePetDTO extends PartialType(CreatePetDTO) {
  @IsMongoId({ message: 'Invalid id' })
  id: string;
}
