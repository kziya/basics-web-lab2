import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { User } from './user.schema';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async getUserByEmailAndPassword(
    email: string,
    password: string,
  ): Promise<User> {
    return this.userModel.findOne({ email, password });
  }

  async getUserList(): Promise<User[]> {
    return this.userModel.find({}, { password: 0 });
  }
}
