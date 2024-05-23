import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppointmentModule } from './appointment/appointment.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ReviewModule } from './review/review.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    AppointmentModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        uri: process.env.DB_URI,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    ReviewModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../client', './dist'),
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
