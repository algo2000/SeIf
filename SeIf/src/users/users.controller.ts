import { Controller, Delete, Get, Param } from '@nestjs/common';
import { Public } from 'src/skip-auth.decorator';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param() id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param() id: string): Promise<void> {
    await this.usersService.remove(id);
  }
}
