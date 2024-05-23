import { Model } from 'mongoose';

export interface IPaginationStrategy {
  paginate<T>(
    model: Model<T>,
    page: number,
    limit: number,
    findParams?: any,
    populatePath?: string,
  ): Promise<{ data: T[]; page: number; limit: number; total: number }>; // Змінено totalCount на total
}
