import { Category } from '../../category/entities/category.entity';
import { AbstractEntity } from '../../database/abstract.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity('product')
export class Product extends AbstractEntity<Product> {
  @ManyToMany(() => Category)
  @JoinTable({
    name: 'product_categories',
  })
  categories: Category[] | null;

  @Column()
  name: string;

  @Column()
  qty: number;

  @Column()
  price: number;

  @Column()
  photo: string;
}
