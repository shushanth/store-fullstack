import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './module/pet/pet.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [PetModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
