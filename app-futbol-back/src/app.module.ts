import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GroupsModule } from './groups/groups.module';
import { GroupMembersModule } from './group-members/group-members.module';

@Module({
  imports: [AuthModule, UserModule, GroupsModule, GroupMembersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
