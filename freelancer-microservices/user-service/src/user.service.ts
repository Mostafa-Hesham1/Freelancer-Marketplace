import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SignupDto } from './auth.dto'; // Add this line

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  getHello(): string {
    return 'User Microservice';
  }

  async createUser(signupDto: SignupDto): Promise<User> {
    const createdUser = new this.userModel(signupDto);
    return createdUser.save();
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }

  async findUserById(userId: string): Promise<User | undefined> {
    return this.userModel.findById(userId).exec();
  }

  async updateUser(userId: string, updateData: Partial<User>): Promise<User> {
    return this.userModel.findByIdAndUpdate(userId, updateData, { new: true }).exec();
  }
}
