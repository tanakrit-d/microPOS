import { z } from "zod";
import {
  UUIDSchema,
  ItemSchema,
  ItemCreateSchema,
  ItemUpdateSchema,
  ItemResponseSchema,
} from "./schema";

type UUID = z.infer<typeof UUIDSchema>;
type Item = z.infer<typeof ItemSchema>;
type ItemCreate = z.infer<typeof ItemCreateSchema>;
type ItemUpdate = z.infer<typeof ItemUpdateSchema>;
type ItemResponse = z.infer<typeof ItemResponseSchema>;

export { UUID, Item, ItemCreate, ItemUpdate, ItemResponse };
