import { z } from "zod";

const UUIDSchema = z.string().uuid();

const ItemSchema = z.object({
    id: UUIDSchema.nullish(),
    title: z.string().max(22).nullish(),
    title_full: z.string().nullish(),
    description: z.string().nullish(),
    categories: z.array(UUIDSchema).nullish(),
    price: z.number().default(0.0),
    image_uri: z.string().url().nullish(),
    created_at: z.string().nullish(),
    updated_at: z.string().nullish(),
    is_available: z.boolean().nullish(),
});

const ItemCreateSchema = z.object({
    title: z.string().max(22),
    title_full: z.string().nullish(),
    description: z.string().nullish(),
    categories: z.array(UUIDSchema).nullish(),
    price: z.number().default(0.0),
    image_uri: z.string().url().nullish(),
    is_available: z.boolean().default(false),
});

const ItemUpdateSchema = z.object({
    title: z.string().max(22).nullish(),
    title_full: z.string().nullish(),
    description: z.string().nullish(),
    categories: z.array(UUIDSchema).nullish(),
    price: z.number().default(0.0),
    image_uri: z.string().url().nullish(),
    is_available: z.boolean().nullish().default(false),
});

const ItemResponseSchema = z.object({
    data: z.array(ItemSchema),
    count: z.number().nullish(),
});

export {
    UUIDSchema,
    ItemSchema,
    ItemCreateSchema,
    ItemUpdateSchema,
    ItemResponseSchema,
};
