import { Body, Controller, Post, Req } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { createGroupsDto } from 'src/dtos/createGroups.dto';
import { GroupMembersService } from 'src/group-members/group-members.service';

@Controller('groups')
export class GroupsController {
    constructor(private groupService: GroupsService,private groupMembersService: GroupMembersService){}

    @Post()
    createGroups(@Body() data:createGroupsDto ){
        this.groupService.createGroups(data)
    }
    createGroupMembers(@Req() req:Request){
        this.groupMembersService.createGroupMembers(req.body)
    }
    
}
