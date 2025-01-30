import { Controller, Get, Delete, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { UserRole } from './users.entity';

@UseGuards(JwtGuard, RolesGuard) 
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles(UserRole.ADMIN) 
  getAllUsers() {
    return this.usersService.findAll();
  }

  @Get(':id/images')
  @Roles(UserRole.ADMIN) 
  getUserImages(@Param('id') userId: string) {
    return this.usersService.getCertifiedImages(userId);
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN) 
  deleteUser(@Param('id') userId: string) {
    return this.usersService.delete(userId);
  }
}
