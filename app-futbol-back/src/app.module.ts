import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [AuthModule, UserModule, GroupsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
