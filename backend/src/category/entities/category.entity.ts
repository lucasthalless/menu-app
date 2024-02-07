import { AbstractEntity } from '@src/database/abstract.entity';
import { Product } from '@src/product/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Category extends AbstractEntity<Category> {
  @JoinColumn()
  id: string;

  @Column({ nullable: true, default: undefined })
  @OneToOne(() => Category)
  parent?: string;

  @Column()
  name: string;

  @ManyToMany(() => Product, (product) => product.categories)
  @JoinTable({
    name: 'product_categories',
  })
  products?: Product[] | null;
}
