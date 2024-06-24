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
    const result = fileType.parse(file.buffer);
    return this.uploadImageOptions.includes(result.mime);
  }
  buildErrorMessage(): string {
    return 'upload image file should be of type jp(e)g, png';
  }
}
