import { z } from "zod";

// Okay I need to figure out why I moved to .nullish() instead of .optional(), because the former is incompatible with TextInput

const UUIDSchema = z.string().uuid();

const ItemSchema = z.object({
    id: UUIDSchema.nullish(),
    title: z.string().max(22).optional(),
    title_full: z.string().optional(),
    description: z.string().optional(),
    categories: z.array(UUIDSchema).optional(),
    price: z.number().default(0.0),
    image_uri: z.string().url().optional(),
    created_at: z.string().optional(),
    updated_at: z.string().optional(),
    is_available: z.boolean(),
});

const ItemCreateSchema = z.object({
    title: z.string().max(22),
    title_full: z.string().nullish(),
    description: z.string().nullish(),
    categories: z.array(UUIDSchema).nullish(),
    price: z.preprocess((val) => {
        if (typeof val === "string") return parseFloat(val);
        if (typeof val === "number") return val;
        return undefined;
    }, z.number().default(0.0)),
    image_uri: z.string().url().nullish(),
    is_available: z.boolean().default(false),
});

const ItemUpdateSchema = z.object({
    title: z.string().max(22).nullish(),
    title_full: z.string().nullish(),
    description: z.string().nullish(),
    categories: z.array(UUIDSchema).nullish(),
    price: z.preprocess((val) => {
        if (typeof val === "string") return parseFloat(val);
        if (typeof val === "number") return val;
        return undefined;
    }, z.number().default(0.0)),
    image_uri: z.string().url().nullish(),
    is_available: z.boolean().nullish(),
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
