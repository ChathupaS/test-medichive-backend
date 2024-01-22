import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [userController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
