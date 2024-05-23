import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Review, ReviewSchema } from './entities/review.entity';
import { UserModule } from 'src/user/user.module';
import { PaginationStrategy } from 'src/common/strategies/pagination.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]),
    UserModule,
  ],
  controllers: [ReviewController],
  providers: [ReviewService, PaginationStrategy],
})
export class ReviewModule {}
