import { Body, Controller, Post } from '@nestjs/common';
import { UserCreateDTO } from 'src/dtos/user.dto';
import { UserService } from './user.service';


@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

}
