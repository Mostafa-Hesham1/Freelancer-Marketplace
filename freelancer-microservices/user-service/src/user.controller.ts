import { Controller, Get, Post, Body, HttpException, HttpStatus, Param, Put, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { SignupDto, LoginDto } from './auth.dto';
import { Request } from 'express';
import { User } from './user.schema';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  @Post('signup')
  async signup(@Body() signupDto: SignupDto): Promise<any> {
    try {
      return await this.authService.signup(signupDto);
    } catch (error) {
      throw new HttpException('Signup failed', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    try {
      return await this.authService.login(loginDto);
    } catch (error) {
      throw new HttpException('Login failed', HttpStatus.UNAUTHORIZED);
    }
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateData: Partial<User>): Promise<User> {
    return this.userService.updateUser(id, updateData);
  }

  @Get('me')
  async getMe(@Req() req: Request): Promise<User> {
    const userId = Array.isArray(req.headers['user-id']) ? req.headers['user-id'][0] : req.headers['user-id']; // Ensure userId is a string
    if (!userId) {
      throw new HttpException('User ID not provided', HttpStatus.BAD_REQUEST);
    }
    return this.userService.findUserById(userId as string);
  }
}
