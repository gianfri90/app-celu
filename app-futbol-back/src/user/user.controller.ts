import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDTO } from 'src/dtos/user.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

    @Post('create')
    createUser(@Body() userData: UserCreateDTO) {
        this.userService.register(userData);
    }
}
