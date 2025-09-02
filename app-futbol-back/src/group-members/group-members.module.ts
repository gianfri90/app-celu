import { Module } from '@nestjs/common';
import { GroupMembersService } from './group-members.service';
import { GroupMembersController } from './group-members.controller';

@Module({
  providers: [GroupMembersService],
  controllers: [GroupMembersController]
})
export class GroupMembersModule {}
