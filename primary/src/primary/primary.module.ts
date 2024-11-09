import { Module } from '@nestjs/common';
import { PrimaryController } from './primary.controller';

@Module({
  controllers: [PrimaryController]
})
export class PrimaryModule {}
