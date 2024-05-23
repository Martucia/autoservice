import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDto } from './dto/appointment.dto';
import { ResponseType } from 'src/common/types';
import {
  PaginationQueryDto,
  PaginationResultDto,
} from 'src/common/dto/pagination.dto';
import { Appointment } from './entities/appointment.entity';
import { AdminGuard } from 'src/auth/admin.guard';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  async create(
    @Body() createAppointmentDto: CreateAppointmentDto,
  ): Promise<ResponseType> {
    return this.appointmentService.create(createAppointmentDto);
  }

  @Get()
  @UseGuards(AuthGuard, AdminGuard)
  async findAll(
    @Query() paginationQueryDto: PaginationQueryDto,
  ): Promise<PaginationResultDto<Appointment>> {
    return this.appointmentService.findAll(paginationQueryDto);
  }

  @Get(':id')
  @UseGuards(AuthGuard, AdminGuard)
  findOne(@Param('id') id: string) {
    return this.appointmentService.findOne(id);
  }
}
