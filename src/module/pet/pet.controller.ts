import { PetIdDTO } from './dto/pet-id.dto';
import { UpdatePetDTO } from './dto/update-pet.dto';
import { CreatePetDTO } from './dto/create-pet.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseArrayPipe,
  Delete,
  ParseIntPipe,
  Put,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';

import { PetService } from './pet.service';
import { Pet } from './pet.schema';
import { PetStatus } from './enums/pet.enum';

@Controller('pet')
export class PetController {
  constructor(private petService: PetService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() pet: CreatePetDTO): Promise<Pet> {
    return this.petService.create(pet);
  }

  @Get('findByStatus')
  async getPetByStatus(
    @Query('status')
    status: PetStatus.available | PetStatus.pending | PetStatus.sold,
  ): Promise<Pet[]> {
    return this.petService.findByStatus(status);
  }

  @Get('findByTags')
  async getPetByTags(
    @Query('tags', new ParseArrayPipe({ items: String, separator: ',' }))
    tags: string[],
  ): Promise<Pet[]> {
    return this.petService.findByTags(tags);
  }

  @Get(':id')
  async getPetById(@Param('id') id: string): Promise<Pet> {
    return this.petService.findById(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deletePetById(@Param('id') id: string) {
    return this.petService.deleteById(id);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  async updatePet(@Body() pet: UpdatePetDTO) {
    return this.petService.updatePet(pet);
  }

  @Post(':id')
  async updatePetById(
    @Param('id') id: string,
    @Query('name') name: string,
    @Query('status') status: string,
  ): Promise<Pet> {
    return this.petService.updatePetById(id, name, status);
  }
}
