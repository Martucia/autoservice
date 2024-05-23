import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { PasswordService } from './password.service';
import { JwtService } from '@nestjs/jwt';
import { SignUpBodyDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async signUp(signUpBodyDto: SignUpBodyDto) {
    const { email, password, name, phone } = signUpBodyDto;
    const user = await this.userService.findByEmail(email);

    if (user?.isAuth) {
      throw new BadRequestException({ type: 'email-exists' });
    }

    const salt = this.passwordService.getSalt();
    const hash = this.passwordService.getHash(password, salt);

    const userData = user
      ? await this.userService.update(user._id, { isAuth: true, salt, hash })
      : await this.userService.create({ name, phone, email, hash, salt });

    const { _id, isAdmin } = userData;

    const accessToken = await this.jwtService.signAsync({
      id: _id,
      name,
      email,
      isAdmin,
    });

    return { accessToken };
  }

  async signIn(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const hash = this.passwordService.getHash(password, user.salt);

    if (hash !== user.hash) {
      throw new UnauthorizedException();
    }

    const accessToken = await this.jwtService.signAsync({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });

    return { accessToken };
  }
}
