import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from '@src/category/dto/create-category.dto';
import { Category } from '@src/category/entities/category.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = new Category(createCategoryDto);
    await this.entityManager.save(category);
  }
  async findAll() {
    return this.categoryRepository.find({
      relations: { products: true },
    });
  }
  async findOne(id: string) {
    return this.categoryRepository.find({
      where: { id },
      relations: { products: true },
    });
  }
}
