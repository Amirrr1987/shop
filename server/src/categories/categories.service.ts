import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { CreateCategoryDTO, SuccessResponse } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';
import { Category } from '../schemas/category.schema';
import { CategoriesRepository } from './categories.repository';
import { ResponseService } from 'src/response/response.service';

@Injectable()
export class CategoriesService {
  constructor(
    private categoriesRepository: CategoriesRepository,
    private responseService: ResponseService,
  ) {}

  public async create(dto: CreateCategoryDTO): Promise<SuccessResponse> {
    await this.findOneByValue({ value: dto.value });
    const data = await this.categoriesRepository.create(dto);
    return this.responseService.successCreateOne(data, 'category');
  }

  protected async findOneByValue(
    query: Partial<UpdateCategoryDTO>,
  ): Promise<SuccessResponse> {
    const category = await this.categoriesRepository.findOneByValue(query);
    if (category) {
      throw new ConflictException('Category already exists');
    }
    return category;
  }

  public async findAll(): Promise<SuccessResponse> {
    const data = await this.categoriesRepository.findAll();
    return this.responseService.successFindAll(data, 'category');
  }

  public async findOneById(id: string): Promise<SuccessResponse> {
    const category = await this.categoriesRepository.findOneById(id);
    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
    return this.responseService.successFindOne(id, category, 'category');
  }

  public async updateOneById(
    id: string,
    dto: UpdateCategoryDTO,
  ): Promise<SuccessResponse> {
    const category = await this.categoriesRepository.updateOneById(id, dto);
    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
    return this.responseService.successUpdateOne(id, 'category');
  }

  public async removeOneById(id: string): Promise<SuccessResponse> {
    const category = await this.categoriesRepository.removeOneById(id);
    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
    return this.responseService.successDeleteOne(id, 'category');
  }
}
