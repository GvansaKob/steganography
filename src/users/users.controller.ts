import { Controller, Get, Delete, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UserRole } from './users.entity';
import { JwtGuard } from '../auth/guards/jwt.guard';



@UseGuards(RolesGuard)
@Controller('users')
export class UsersController {
  @Roles(UserRole.ADMIN)
  @Get()
  getAllUsers() {
    return 'Liste des utilisateurs';
  }

  @Roles(UserRole.ADMIN)
  @Delete(':id')
  deleteUser() {
    return 'Utilisateur supprimé';
  }
}

@Controller('admin')
@UseGuards(JwtGuard, RolesGuard)
export class AdminController {
  
  @Get('users')
  @Roles('admin')
  getAllUsers() {
    return 'Liste des utilisateurs (réservé aux admins)';
  }
}
