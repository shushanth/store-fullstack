import { IsMongoId } from 'class-validator';

export class PetIdDTO {
  @IsMongoId({ message: 'invalid id' })
  id: string;
}
