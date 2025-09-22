import { Controller, Get, Req } from '@nestjs/common';
import { GroupMembersService } from './group-members.service';
import type { Request } from 'express';

@Controller('group-members')
export class GroupMembersController {

    constructor(private GroupMembersService:GroupMembersService){}

    @Get()
    getGroups(@Req() request: Request){
        return this.GroupMembersService.getGroups(request)
    }
}
