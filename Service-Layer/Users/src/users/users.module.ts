import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { UsersController } from './users.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { Users, UserSchema } from './entities/users.model';

import { UsersRepository } from './users.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersRepository,UsersResolver, UsersService,],
})
export class UsersModule {}
