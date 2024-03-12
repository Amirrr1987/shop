import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const createCategoryDTOSchema = z
  .object({
    title: z.string(),
    value: z.string(),
    description: z.string().optional(),
    parent_id: z.string().optional(),
  })
  .strict();

export class CreateCategoryDTO extends createZodDto(createCategoryDTOSchema) {}

export interface SuccessResponse {}
