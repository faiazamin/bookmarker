import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login() {
        return 'signed in'
    }

    signup() {
        return 'signed up'
    }
}
