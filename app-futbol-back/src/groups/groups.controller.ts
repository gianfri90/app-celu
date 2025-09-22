import { Body, Controller, Post, Req } from '@nestjs/common';
import { GroupsService } from './groups.service';
import type { createGroupsDto } from 'src/dtos/createGroups.dto'; // <-- type import
import { GroupMembersService } from 'src/group-members/group-members.service';
import type { Request } from 'express'; // <-- type import

@Controller('groups')
export class GroupsController {
    constructor(
        private readonly groupService: GroupsService,
        private readonly groupMembersService: GroupMembersService,
    ) {}

    @Post()
    async createGroups(
        @Body() data: createGroupsDto,
        @Req() request: Request,
    ) {
        const group = await this.groupService.createGroups(data);
        const groupMember = await this.groupMembersService.createGroupAdmin(
            request,
            group.id,
        );

        return {
            group,
            groupMember,
        };
    }
}
