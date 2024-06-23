import { PetDTO, PetStatus } from './dto/pet.dto';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model, Mongoose } from 'mongoose';
import { Pet, PetDocument } from './pet.schema';

@Injectable()
export class PetService {
  constructor(
    @InjectModel(Pet.name) private readonly petModel: Model<PetDocument>,
  ) {}

  async create(pet: PetDTO): Promise<Pet> {
    return await this.petModel.create(pet);
  }
  async findById(id: number): Promise<Pet> {
    return await this.petModel.findById(id);
  }

  async findByStatus(
    status: PetStatus.available | PetStatus.pending | PetStatus.sold,
  ): Promise<Pet[]> {
    return await this.petModel.find({ status });
  }

  async findByTags(tags: string[]): Promise<Pet[]> {
    return await this.petModel.find({
      'tags.name': {
        $all: tags,
      },
    });
  }

  async deleteById(id: number) {
    return await this.petModel.deleteOne({
      _id: id,
    });
  }
}
