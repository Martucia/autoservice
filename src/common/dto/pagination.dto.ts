import { Type } from 'class-transformer';
import { IsInt, Min, Max } from 'class-validator';

export class PaginationResultDto<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
}


export class PaginationQueryDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(500)
  limit: number = 20;
}