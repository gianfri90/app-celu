import { Injectable } from '@nestjs/common';
import { RegisterDto } from 'src/dtos/register.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
    constructor(private prisma:PrismaService){}

    async findOneByEmail(email: string){
        return this.prisma.user.findUnique({
            where:{email},
        });
    }

    create(createUserDto:RegisterDto){
        return this.prisma.user.create({
            data:{
                email:createUserDto.email,
                name:createUserDto.name,
                password:createUserDto.password,
            }
        })
    }

}
