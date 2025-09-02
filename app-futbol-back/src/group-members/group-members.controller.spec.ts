import { Test, TestingModule } from '@nestjs/testing';
import { GroupMembersController } from './group-members.controller';

describe('GroupMembersController', () => {
  let controller: GroupMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupMembersController],
    }).compile();

    controller = module.get<GroupMembersController>(GroupMembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
