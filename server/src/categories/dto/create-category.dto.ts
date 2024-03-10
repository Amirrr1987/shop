import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  value: string;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  children_id?: string[];

  @IsOptional()
  @IsString()
  parent_id?: string;
}

// export class CreateCategoryDto extends Category {}
