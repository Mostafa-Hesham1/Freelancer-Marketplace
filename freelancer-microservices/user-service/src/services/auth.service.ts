import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { SignupDto, LoginDto } from '../auth.dto';
import { User } from '../models/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async signup(signupDto: SignupDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(signupDto.password, 10);
    const user = await this.userService.createUser({
      ...signupDto,
      password: hashedPassword,
    });
    return user;
  }

  async login(loginDto: LoginDto): Promise<User> {
    const user = await this.userService.findUserByEmail(loginDto.email);
    if (!user || !(await bcrypt.compare(loginDto.password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
