import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProductCategoriesSeeder1707540600056
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `INSERT INTO menu.product_categories (\`categoryId\`, \`productId\`) VALUES ('18b80200-c6d6-4512-952c-6a8b5af8082a','049907d3-59b9-4729-ae6e-a6498abe3232'),('18b80200-c6d6-4512-952c-6a8b5af8082a','33045f2e-b3db-49b3-99c1-dbc5248e878d'),('18b80200-c6d6-4512-952c-6a8b5af8082a','36b4a5a3-d272-46fa-8546-6865ac62a68a'),('18b80200-c6d6-4512-952c-6a8b5af8082a','3b184779-3b32-45dc-9587-806e7a64c033'),('18b80200-c6d6-4512-952c-6a8b5af8082a','b0216231-8339-48c7-87d2-baa3d74aec95'),('b16551b2-14a7-4fec-b3f2-6093f952fd69','5c62780b-939d-45e6-8508-0d18538b7877'),('b16551b2-14a7-4fec-b3f2-6093f952fd69','76123404-1fa0-4def-9906-e82e7b37d704');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`TRUNCATE menu.product_categories`);
  }
}
