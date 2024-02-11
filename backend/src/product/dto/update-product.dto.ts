import { Category } from '../../category/entities/category.entity';

export class UpdateProductDto {
  name?: string;
  categories?: Category[] | null;
  qty?: number;
  price?: number;
  photo?: string;
}
