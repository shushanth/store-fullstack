import { ImageUploadValidator } from './validators/pet.validator';
import {
  IMAGE_UPLOAD_SIZE,
  IMAGE_UPLOAD_TYPES,
} from './constants/pet.constants';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  ParseArrayPipe,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
  ParseFilePipeBuilder,
} from '@nestjs/common';
import { UpdatePetDTO } from './dto/update-pet.dto';
import { CreatePetDTO } from './dto/create-pet.dto';
import { PetService } from './pet.service';
import { Pet } from './pet.schema';
import { PetStatus } from './enums/pet.enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
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

  @Post(':id/uploadImage')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './public/images/pet',
        filename: (req, file, cb) => {
          const name = file.originalname.split('.')[0];

          const fileExtName = file.originalname;
          const randomName = Array(4)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${name}-${randomName}${fileExtName}`);
        },
      }),
      // fileFilter: (req, file, cb) => {
      //   if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      //     return cb(new Error('Only image files are allowed!'), false);
      //   }
      //   cb(null, true);
      // },
    }),
  )
  uploadImage(
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipeBuilder()
        // .addValidator(
        //   new ImageUploadValidator({
        //     fileType: IMAGE_UPLOAD_TYPES,
        //   }),
        // )
        // .addMaxSizeValidator({
        //   maxSize: IMAGE_UPLOAD_SIZE,
        // })
        .build({ errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY }),
    )
    file: Express.Multer.File,
  ): Promise<Pet> {
    const petPhotoUrl = file.filename;
    return this.petService.uploadPetImage(
      id,
      petPhotoUrl,
      `/images/pet/${petPhotoUrl}`,
    );
  }
}
