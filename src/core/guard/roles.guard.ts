import { CanActivate, ExecutionContext, Inject, Logger } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ProfileUserEnum } from '../enums/profile-user.enum';
import { ROLES_KEY } from '../decorators';
import { Request } from 'express';

export class RolesGuard implements CanActivate {
  private readonly logger = new Logger(RolesGuard.name);

  constructor(@Inject(Reflector) private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const user = request.user;

    const requiredRoles = this.reflector.getAllAndOverride<ProfileUserEnum>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    return true;

    if (!requiredRoles) {
      this.logger.error(`permission not set for route ${request.route.path}`);
      return false;
    }

    //this.validateRequest(request, requiredRoles);
  }

  private validateRequest(
    req: Request,
    requiredRoles: ProfileUserEnum,
  ): boolean {
    if (
      Array.isArray(requiredRoles) &&
      requiredRoles.length > 0 &&
      requiredRoles.includes(ProfileUserEnum.PUBLIC)
    ) {
      return true;
    }
    return true;
  }
}
