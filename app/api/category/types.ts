import { z } from "zod";
import {
  UUIDSchema,
  CategorySchema,
  CategoryCreateSchema,
  CategoryUpdateSchema,
  CategoryResponseSchema,
} from "./schema";

type UUID = z.infer<typeof UUIDSchema>;
type Category = z.infer<typeof CategorySchema>;
type CategoryCreate = z.infer<typeof CategoryCreateSchema>;
type CategoryUpdate = z.infer<typeof CategoryUpdateSchema>;
type CategoryResponse = z.infer<typeof CategoryResponseSchema>;

export { UUID, Category, CategoryCreate, CategoryUpdate, CategoryResponse };
