import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { GroupMembersService } from './group-members.service';
import type { Request } from 'express';

@Controller('group-members')
export class GroupMembersController {

    constructor(private GroupMembersService:GroupMembersService){}

    @Get('/groups')
    getGroups(@Req() request: Request){
        return this.GroupMembersService.getGroups(request)
    }

    @Get('/members/:id')
    getPersonGroups(@Param('id') id:string){
        console.log("xx")
        return this.GroupMembersService.getPersonGroups(parseInt(id));
    }
}
