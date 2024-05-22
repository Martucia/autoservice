import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateNotAuthUserDto,
  CreateUserDto,
  UpdateUserDto,
} from './dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { formatPhone } from 'src/common/utils/functions';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const formatedPhone = formatPhone(createUserDto.phone);

    const user = await this.userModel.create({
      ...createUserDto,
      phone: formatedPhone,
    });

    return user;
  }

  async createNotAuth(createUserDto: CreateNotAuthUserDto): Promise<User> {
    const formatedPhone = formatPhone(createUserDto.phone);

    const user = await this.userModel.create({
      ...createUserDto,
      phone: formatedPhone,
    });

    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userModel.find().select('-hash -salt').exec();

    return users;
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new BadRequestException({ type: 'user-not-exists' });
    }

    return user;
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }

  findByPhone(phone: string) {
    return this.userModel.findOne({ phone });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
