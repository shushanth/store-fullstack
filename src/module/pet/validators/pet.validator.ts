import { IMAGE_UPLOAD_TYPES_ERROR } from './../constants/pet.constants';
import { FileValidator } from '@nestjs/common';
import { buildMessage } from 'class-validator';
import * as fileType from 'file-type-mime';

export interface ImageUploadValidatorOptions {
  fileType: string[];
}

export class ImageUploadValidator extends FileValidator {
  private uploadImageOptions: string[];
  constructor(
    protected readonly validatorOptions: ImageUploadValidatorOptions,
  ) {
    super(validatorOptions);
    this.uploadImageOptions = this.validationOptions.fileType;
  }

  isValid(file?: Express.Multer.File): boolean {
    return this.uploadImageOptions.includes(file.mimetype);
  }
  buildErrorMessage(): string {
    return IMAGE_UPLOAD_TYPES_ERROR;
  }
}
