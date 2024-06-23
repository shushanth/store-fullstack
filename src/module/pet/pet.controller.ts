import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Logger,
  ParseArrayPipe,
  Delete,
} from '@nestjs/common';
import { PetService } from './pet.service';
import { Pet } from './pet.schema';
import { PetDTO, PetStatus } from './dto/pet.dto';

@Controller('pet')
export class PetController {
  constructor(private petService: PetService) {}

  @Post()
  async create(@Body() pet: PetDTO): Promise<Pet> {
    return this.petService.create(pet);
  }

  @Get('findByStatus')
  async getPetByStatus(
    @Query('status')
    status: PetStatus.available | PetStatus.pending | PetStatus.sold,
  ): Promise<Pet[]> {
    Logger.log('status', status);
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
  async getPetById(@Param('id') id: number): Promise<Pet> {
    return this.petService.findById(id);
  }

  @Delete(':id')
  async deletePetById(@Param('id') id: number) {
    return this.petService.deleteById(id);
  }
}
