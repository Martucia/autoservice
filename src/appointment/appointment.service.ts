import { Injectable } from '@nestjs/common';
import { CreateAppointmentDto } from './dto/appointment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Appointment } from './entities/appointment.entity';
import { Model, Types } from 'mongoose';
import { ResponseType, StatusEnum } from 'src/common/types';
import { UserService } from 'src/user/user.service';
import { Document } from 'mongoose';
import { User } from 'src/user/entities/user.entity';
import {
  PaginationQueryDto,
  PaginationResultDto,
} from 'src/common/dto/pagination.dto';
import { PaginationStrategy } from 'src/common/strategies/pagination.strategy';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectModel(Appointment.name)
    private readonly appointmentModel: Model<Appointment>,
    private readonly userService: UserService,
    private readonly paginationStrategy: PaginationStrategy,
  ) {}

  async create(
    createAppointmentDto: CreateAppointmentDto,
  ): Promise<ResponseType> {
    let user:
      | (Document<unknown, {}, User> & User & { _id: Types.ObjectId })
      | null;

    user = await this.userService.findByEmail(createAppointmentDto.email);

    if (!user) {
      user = (await this.userService.createNotAuth({
        name: createAppointmentDto.name,
        phone: createAppointmentDto.phone,
        email: createAppointmentDto.email,
      })) as Document<unknown, {}, User> & User & { _id: Types.ObjectId };
    }

    const newAppointment = new this.appointmentModel({
      user,
      issue: createAppointmentDto.issue,
    });

    await newAppointment.save();

    return {
      message: 'Запис успішно створений',
      status: StatusEnum.Success,
    };
  }

  async findAll(
    paginationQueryDto: PaginationQueryDto,
  ): Promise<PaginationResultDto<Appointment>> {
    return this.paginationStrategy.paginate(
      this.appointmentModel,
      paginationQueryDto.page,
      paginationQueryDto.limit,
      {},
      'user',
    );
  }

  async findOne(id: string) {
    const appointment = await this.appointmentModel.findById(id);

    return appointment;
  }
}
