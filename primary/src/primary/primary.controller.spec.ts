import { Test, TestingModule } from '@nestjs/testing';
import { PrimaryController } from './primary.controller';

describe('PrimaryController', () => {
  let controller: PrimaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrimaryController],
    }).compile();

    controller = module.get<PrimaryController>(PrimaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
