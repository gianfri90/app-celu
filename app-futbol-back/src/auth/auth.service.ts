import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";
import * as bcryptjs from "bcryptjs";
import { RegisterDto } from 'src/dtos/register.dto';
import { LoginDto } from 'src/dtos/login.dto';
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async register({ password, email, name }: RegisterDto) {
    const user = await this.usersService.findOneByEmail(email);

    if (user) {
      throw new BadRequestException("Email already exists");
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const newUser = await this.usersService.create({
      name,
      email,
      password: hashedPassword,
    });

    const payload = {email:newUser.email,name:newUser.name,id:newUser.id};

    const token = await this.jwtService.signAsync(payload);

    

    return {
      token: token,
    };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException("Invalid email");
    }
    
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid password");
    }

    const payload = {email:user.email,name:user.name,id:user.id};

    const token = await this.jwtService.signAsync(payload);

    return {
      token: token,
    };
  }
}