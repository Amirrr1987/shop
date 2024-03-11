import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { UpdateCategoryDTO } from './dto/update-category.dto';
import { Category, CategoryDocument } from '../schemas/category.schema';

@Injectable()
export class CategoriesRepository {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  public async create(dto: CreateCategoryDTO): Promise<Category> {
    return await this.categoryModel.create(dto);
  }
  public async addChildren(
    id: string,
    dto: CreateCategoryDTO,
  ): Promise<Category> {
    // const parent = new this.categoryModel(dto);
    // console.log('🚀 ~ CategoriesRepository ~ addChildren ~ parent:', parent);
    return (await {}) as Category;
  }

  public async findAll(): Promise<Category[]> {
    return await this.categoryModel.find().exec();
  }

  public async findOneById(id: string): Promise<Category> {
    return await this.categoryModel.findById(id).exec();
  }
  public async findOneByValue(
    query: Partial<UpdateCategoryDTO>,
  ): Promise<Category> {
    return await this.categoryModel.findOne(query).exec();
  }

  public async updateOneById(
    id: string,
    dto: UpdateCategoryDTO,
  ): Promise<Category> {
    return await this.categoryModel
      .findByIdAndUpdate(id, dto, { new: true })
      .exec();
  }

  public async removeOneById(id: string): Promise<Category> {
    return await this.categoryModel.findByIdAndDelete(id).exec();
  }
}
