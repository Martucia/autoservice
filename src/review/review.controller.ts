import { Controller, Post, Body, Query, Get, UseGuards } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/review.dto';
import {
  PaginationQueryDto,
  PaginationResultDto,
} from 'src/common/dto/pagination.dto';
import { Review } from './entities/review.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { AdminGuard } from 'src/auth/admin.guard';

@Controller('review')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  @UseGuards(AuthGuard, AdminGuard)
  async findAll(
    @Query() paginationQueryDto: PaginationQueryDto,
  ): Promise<PaginationResultDto<Review>> {
    return this.reviewService.findAll(paginationQueryDto);
  }
}
