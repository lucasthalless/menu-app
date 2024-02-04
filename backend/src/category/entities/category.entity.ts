import { AbstractEntity } from 'src/database/abstract.entity';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity()
export class Category extends AbstractEntity<Category> {
  @JoinColumn()
  id: string;

  @Column({ nullable: true, default: undefined })
  @OneToOne(() => Category)
  parent?: string;

  @Column()
  name: string;
}
