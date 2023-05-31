import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Inject,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  @Inject()
  private readonly jwtService: JwtService;
  async canActivate(context: ExecutionContext): Promise<any> {
    const request = context.switchToHttp().getRequest();
    let token = request.headers.authorization;

    if (!token) throw new UnauthorizedException();

    try {
      if (token.startsWith('Bearer ')) {
        token = token.substr('Bearer '.length);
        await this.jwtService.verifyAsync(token);
      }
    } catch (error) {
      throw new UnauthorizedException();
    }
    const decodeToken = this.jwtService.decode(token);
    if (!decodeToken) {
      throw new UnauthorizedException();
    }
    request.user = decodeToken;
    return true;
  }
}
