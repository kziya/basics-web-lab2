import { Controller, Get } from '@nestjs/common';

import { User } from './user.schema';
import { UserRepository } from './user.repository';

@Controller('users')
export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  @Get('list')
  public async getUserList(): Promise<User[]> {
    return this.userRepository.getUserList();
  }
}
