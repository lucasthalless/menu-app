import { MigrationInterface, QueryRunner } from 'typeorm';

export class CategorySeeder1707540583527 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        INSERT INTO menu.category VALUES ('18b80200-c6d6-4512-952c-6a8b5af8082a',NULL,'Pizzas'),('210bdd12-d4ad-474f-babd-5a876bbc9465',NULL,'Sobremesas'),('629d00e8-f2fc-430c-ab11-b287d53d6b86','210bdd12-d4ad-474f-babd-5a876bbc9465','Sobremesas Quentes'),('b16551b2-14a7-4fec-b3f2-6093f952fd69','210bdd12-d4ad-474f-babd-5a876bbc9465','Sobremesas Frias');`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`TRUNCATE menu.category`);
  }
}
