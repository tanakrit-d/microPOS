import { z } from "zod";

const UUIDSchema = z.string().uuid();

const CategorySchema = z.object({
    id: UUIDSchema.nullish(),
    title: z.string().max(22).nullish(),
    image_uri: z.string().url().nullish(),
    created_at: z.string().nullish(),
    updated_at: z.string().nullish(),
    is_available: z.boolean().nullish(),
});

const CategoryCreateSchema = z.object({
    title: z.string().max(22),
    image_uri: z.string().url().nullish(),
    is_available: z.boolean().default(false),
});

const CategoryUpdateSchema = z.object({
    title: z.string().max(22).nullish(),
    image_uri: z.string().url().nullish(),
    is_available: z.boolean().nullish().default(false),
});

const CategoryResponseSchema = z.object({
    data: z.array(CategorySchema),
    count: z.number().nullish(),
});

export {
    UUIDSchema,
    CategorySchema,
    CategoryCreateSchema,
    CategoryUpdateSchema,
    CategoryResponseSchema,
};
