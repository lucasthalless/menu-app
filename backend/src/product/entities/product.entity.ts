import { Category } from 'src/category/entities/category.entity';
import { AbstractEntity } from 'src/database/abstract.entity';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

@Entity()
export class Product extends AbstractEntity<Product> {
  @ManyToMany(() => Category, { cascade: true })
  @JoinTable()
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
