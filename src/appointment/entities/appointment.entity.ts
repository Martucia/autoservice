import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/user/entities/user.entity';

@Schema()
export class Appointment extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required: true })
  issue: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const AppointmentSchema = SchemaFactory.createForClass(Appointment);
