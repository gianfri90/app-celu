// group-members.module.ts
import { Module } from '@nestjs/common';
import { GroupMembersService } from './group-members.service';
import { GroupMembersController } from './group-members.controller';
import { PrismaModule } from 'src/prisma.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [JwtModule.register({}),PrismaModule], // ✅ Acá se importa correctamente
  providers: [GroupMembersService],
  controllers: [GroupMembersController],
  exports: [GroupMembersService],
})
export class GroupMembersModule {}
