import { AbstractEntity } from '../../database/abstract.entity';
import { Product } from '../../product/entities/product.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity('category')
export class Category extends AbstractEntity<Category> {
  @Column({
    nullable: true,
    default: undefined,
  })
  parent?: string;

  @Column()
  name: string;

  @ManyToMany(() => Product, (product) => product.categories)
  @JoinTable({
    name: 'product_categories',
  })
  products?: Product[] | null;
}
