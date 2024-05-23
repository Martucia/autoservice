import { Injectable } from '@nestjs/common';
import { IPaginationStrategy } from '../interfaces/pagination-strategy.interface';
import { Model } from 'mongoose';

@Injectable()
export class PaginationStrategy implements IPaginationStrategy {
  async paginate<T>(
    model: Model<T>,
    page: number = 1,
    limit: number = 20,
    findParams: any = {},
    populatePath: string = '',
  ): Promise<{ data: T[]; page: number; limit: number; total: number }> {
    const total = await model.countDocuments(findParams).exec();

    const data = await model
      .find(findParams)
      .skip((page - 1) * limit)
      .limit(limit)
      .populate(populatePath)
      .exec();
    return {
      data,
      page: Number(page),
      limit: Number(limit),
      total,
    };
  }
}
