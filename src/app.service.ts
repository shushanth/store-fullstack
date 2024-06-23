import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  init(): string {
    return 'App is listening on port 3000';
  }
}
