import { Injectable } from '@nestjs/common';
import { createGroupsDto } from 'src/dtos/createGroups.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GroupsService {
    constructor(private prisma: PrismaService) {}

    private readonly characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    generate(length: number): string {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
        }
        return result;
    }

    async searchCode(code: string): Promise<boolean> {
        const result = await this.prisma.grupo.findMany({
            where: { code }
        });
        return result.length === 0; // true si el código es único
    }

    async createGroups(data: createGroupsDto) {
        let code: string = "";
        let isUnique = false;

        while (!isUnique) {
            code = this.generate(6);
            isUnique = await this.searchCode(code);
        }

        const newCode = code;

        return this.prisma.grupo.create({
            data: {
                name: data.name,
                code: newCode,
                maxIntegrantes: data.maxIntegrantes,
            }
        });
    }
}
