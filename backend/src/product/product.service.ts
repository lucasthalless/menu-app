import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { EntityManager, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entities/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const categories = createProductDto.categories.map(
      (createCategoryDto) => new Category(createCategoryDto),
    );
    const product = new Product({
      ...createProductDto,
      categories,
    });
    await this.entityManager.save(product);
  }

  async findAll() {
    return this.productsRepository.find();
  }

  async findOne(id: string) {
    return this.productsRepository.findOne({
      where: { id },
      relations: { categories: true },
    });
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepository.findOneBy({ id });
    Object.assign(product, updateProductDto);
    await this.entityManager.save(product);
  }

  async remove(id: string) {
    return this.productsRepository.delete(id);
  }
}
