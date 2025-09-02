import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GroupMembersService {
    constructor(private prisma:PrismaService){}

    createGroupMembers(data:any){
        data.
    }
}
