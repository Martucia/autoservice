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
    const isEmailExist = await this.userService.findByEmail(
      signUpBodyDto.email,
    );
    const isPhoneExist = await this.userService.findByPhone(
      signUpBodyDto.phone,
    );

    if (isEmailExist) {
      throw new BadRequestException({ type: 'email-exists' });
    }

    if (isPhoneExist) {
      throw new BadRequestException({ type: 'phone-exists' });
    }

    const salt = this.passwordService.getSalt();
    const hash = this.passwordService.getHash(signUpBodyDto.password, salt);

    const newUser = await this.userService.create({
      name: signUpBodyDto.name,
      phone: signUpBodyDto.phone,
      email: signUpBodyDto.email,
      hash,
      salt,
    });

    const accessToken = await this.jwtService.signAsync({
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
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
