import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaPromise } from '@prisma/client/runtime/library';
import { config } from 'process';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
    constructor(
        private prismaService: PrismaService,
        private jwt: JwtService,
        private config:ConfigService,
    ){}
    login() {
        return 'signed in'
    }

    signup() {
        return 'signed up'
    }

    async signToken(userId: number, email: string) {
        const payload = {
            sub: userId,
            email,
        }
        const access_token = await this.jwt.signAsync(payload, {
            expiresIn: '30m',
            secret:this.config.get('JWT_SECRET'),
        }
        )
        return {
            access_token:access_token
        }
    }
}
