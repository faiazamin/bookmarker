import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
  }), BookmarkModule, AuthModule, UserModule, PrismaModule,JwtModule.register({})],
  controllers: [AppController],
  providers: [AppService, PrismaService,JwtStrategy],
})
export class AppModule {}
