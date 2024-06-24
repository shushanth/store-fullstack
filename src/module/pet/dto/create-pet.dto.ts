import {
  IsObject,
  IsString,
  IsArray,
  IsNotEmpty,
  IsEnum,
  ValidateNested,
  IsDefined,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';

class PetPhotoUrls {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  name: string;
}

export class CreatePetDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsObject()
  readonly category: {
    name: string;
  };

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PetPhotoUrls)
  readonly photoUrls: PetPhotoUrls[];

  @IsArray()
  readonly tags: {
    name: string;
  }[];

  @IsEnum(['available', 'pending', 'sold'], {
    message: 'status must be one of type available, pending, sold',
    each: true,
  })
  @IsArray()
  readonly status: ['available' | 'pending' | 'sold'];
}
