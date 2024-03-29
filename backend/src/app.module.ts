import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { ItemModule } from './item/item.module';
import { PrismaModule } from './prisma/prisma.module';
import { RentalModule } from './rental/rental.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UserModule,
    AuthModule,
    ItemModule,
    RentalModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
