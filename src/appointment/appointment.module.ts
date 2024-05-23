import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Appointment, AppointmentSchema } from './entities/appointment.entity';
import { UserModule } from 'src/user/user.module';
import { PaginationStrategy } from 'src/common/strategies/pagination.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Appointment.name, schema: AppointmentSchema },
    ]),
    UserModule,
  ],
  controllers: [AppointmentController],
  providers: [AppointmentService, PaginationStrategy],
})
export class AppointmentModule {}
