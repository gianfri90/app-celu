import { Module } from '@nestjs/common';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma.module';
import { GroupMembersModule } from 'src/group-members/group-members.module';

@Module({
  imports:[JwtModule.register({}),PrismaModule,GroupMembersModule],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
