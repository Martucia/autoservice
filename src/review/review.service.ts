import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/review.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Review } from './entities/review.entity';
import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { ResponseType, StatusEnum } from 'src/common/types';
import {
  PaginationQueryDto,
  PaginationResultDto,
} from 'src/common/dto/pagination.dto';
import { PaginationStrategy } from 'src/common/strategies/pagination.strategy';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<Review>,
    private readonly userService: UserService,
    private readonly paginationStrategy: PaginationStrategy,
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

  async findAll(
    paginationQueryDto: PaginationQueryDto,
  ): Promise<PaginationResultDto<Review>> {
    return this.paginationStrategy.paginate(
      this.reviewModel,
      paginationQueryDto.page,
      paginationQueryDto.limit,
      {},
      'user',
    );
  }
}
