import { MigrationInterface, QueryRunner } from 'typeorm';

export class ProductSeeder1707540594231 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `INSERT INTO menu.product (\`id\`, \`name\`, \`qty\`, \`price\`, \`photo\`) VALUES ('049907d3-59b9-4729-ae6e-a6498abe3232','Frango com catupiry',15,3299,'pizza.jpg'),('33045f2e-b3db-49b3-99c1-dbc5248e878d','Portuguesa',15,3299,'pizza.jpg'),('36b4a5a3-d272-46fa-8546-6865ac62a68a','Pizza de Abacaxi',5,3299, ''),('3b184779-3b32-45dc-9587-806e7a64c033','Caipira',15,3299,'pizza.jpg'),('5c62780b-939d-45e6-8508-0d18538b7877','Açaí',10,890,'sweet.jpg'),('76123404-1fa0-4def-9906-e82e7b37d704','Sorvete',10,890,'sweet.jpg'),('b0216231-8339-48c7-87d2-baa3d74aec95','Marguerita',15,3299,'pizza.jpg');`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`TRUNCATE menu.product`);
  }
}
