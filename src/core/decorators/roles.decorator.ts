import { SetMetadata } from '@nestjs/common';
import { ProfileUserEnum } from '../enums/profile-user.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: ProfileUserEnum[]) =>
  SetMetadata(ROLES_KEY, roles);
