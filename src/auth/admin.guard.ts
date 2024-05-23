import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest() as Request;
    const session = req['session'];

    if (session && session.isAdmin === true) {
      return true;
    } else {
      throw new ForbiddenException('Access denied');
    }
  }
}
