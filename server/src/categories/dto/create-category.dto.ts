import {
  IsString,
  IsOptional,
  ValidateNested,
  IsNotEmpty,
} from 'class-validator';

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
  children?: string[];
}

// export class CreateCategoryDto extends Category {}
