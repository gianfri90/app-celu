import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class GroupMembersService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async createGroupAdmin(request: Request, IdGrupo: number) {
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }
    let user;
    user = this.jwtService.decode(token)

    return this.prisma.grupoPorPersona.create({
      data: {
        userId: user.id,
        grupoId: IdGrupo,
        isAdmin:true
      },
    });
  }

  async getGroups(request: Request){
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new UnauthorizedException('Token missing');
    }
    let user;
    user = this.jwtService.decode(token)
    const userId = user.id; 
    return this.prisma.grupoPorPersona.findMany({
        where:{userId}
    })
  }

}
