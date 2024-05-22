import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Review } from './entities/review.entity';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { ResponseType, StatusEnum } from 'src/common/types';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<Review>,
    private readonly userService: UserService,
  ) {}
  async create(createReviewDto: CreateReviewDto): Promise<ResponseType> {
    const user = await this.userService.findOne(createReviewDto.user);

    const newReview = new this.reviewModel({
      user,
      text: createReviewDto.text,
    });

    await newReview.save();

    return {
      message: 'Відгук успішно відправлений',
      status: StatusEnum.Success,
    };
  }
}
