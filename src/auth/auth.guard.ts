import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const authHeader = context.switchToHttp().getRequest()
      ?.headers?.authorization;

    const token = authHeader?.split(' ')?.[1];

    try {
      await this.jwtService.verify(token);
    } catch (e) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
