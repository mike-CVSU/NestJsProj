import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimaryModule } from './primary/primary.module';

@Module({
  imports: [PrimaryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
