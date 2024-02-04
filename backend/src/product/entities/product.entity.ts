import { AbstractEntity } from 'src/database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Product extends AbstractEntity<Product> {
  @Column()
  category: string | null;

  @Column()
  name: string;

  @Column()
  qty: number;

  @Column()
  price: number;

  @Column()
  photo: string;
}
