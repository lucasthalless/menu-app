import { AbstractEntity } from '../../database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class ProductCategory extends AbstractEntity<ProductCategory> {
  @Column()
  productId: string;

  @Column()
  categoryId: string;
}
