export class CreateCategoryDto {
  label: string;
  description: string;
  parent: CreateCategoryDto;
  child: CreateCategoryDto[];
}
