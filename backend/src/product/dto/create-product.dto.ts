import { Category } from '../../category/entities/category.entity';

export class CreateProductDto {
  categories: Category[];
  name: string;
  qty: number;
  price: number;
  photo: string;
}
