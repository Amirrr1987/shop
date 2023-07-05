import { z } from "zod";


export const featureSchema = z.object({
  "label": z.string(),
  "value": z.string(),
});
export type Feature = z.infer<typeof featureSchema>;


export const productSchema = z.object({
  "image": z.string(),
  "title": z.string(),
  "subtitle": z.string(),
  "excerpt": z.string(),
  "description": z.string(),
  "price": z.number(),
  "warranty": z.string(),
  "features": z.array(featureSchema),
});
export type Product = z.infer<typeof productSchema>;
