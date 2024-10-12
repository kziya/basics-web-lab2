import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserRepository } from '../users/user.repository';
import { AuthResponse } from './auth.types';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userRepository: UserRepository,
  ) {}

  async login(email: string, password: string): Promise<AuthResponse> {
    const user = await this.userRepository.getUserByEmailAndPassword(
      email,
      password,
    );

    if (!user) {
      throw new BadRequestException('Email or password is wrong !');
    }

    return {
      accessToken: this.jwtService.sign({
        id: user._id,
        email: user.email,
      }),
    };
  }
}
