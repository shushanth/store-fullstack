import { PetIdDTO } from './dto/pet-id.dto';
import { UpdatePetDTO } from './dto/update-pet.dto';
import { CreatePetDTO } from './dto/create-pet.dto';
import { PetStatus } from './enums/pet.enum';
import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Pet, PetDocument } from './pet.schema';

@Injectable()
export class PetService {
  constructor(
    @InjectModel(Pet.name) private readonly petModel: Model<PetDocument>,
  ) {}

  async create(pet: CreatePetDTO): Promise<Pet> {
    const createdPet = new this.petModel(pet);
    return createdPet.save();
  }

  async findById(id: string): Promise<Pet> {
    const petExists = await this.petModel.countDocuments({ _id: id });
    if (!petExists) {
      throw new NotFoundException();
    }
    return this.petModel.findById(id).exec();
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

  async deleteById(id: string) {
    return await this.petModel.deleteOne({
      _id: id,
    });
  }

  async updatePet(pet: UpdatePetDTO) {
    const petId = pet.id;
    const petExists = await this.petModel.countDocuments({ _id: petId });
    if (!petExists) {
      throw new NotFoundException();
    }
    return await this.petModel.updateOne(
      {
        _id: petId,
      },
      {
        $set: { ...pet },
      },
    );
  }

  async updatePetById(id: string, name: string, status: string): Promise<Pet> {
    const petExists = await this.petModel.countDocuments({ _id: id });
    if (!petExists) {
      throw new NotFoundException();
    }
    await this.petModel.updateOne({ _id: id }, { $set: { name, status } });
    return this.petModel.findById(id);
  }
}
