import { create } from 'zustand';
import { z } from "zod";


const MenuItemSchema = z.object({
    title: z.string(),
    title_full: z.string().optional(),
    description: z.string().optional(),
    categories: z.array(z.string()).optional(),
    price: z.coerce.number(),
    image_uri: z.string().optional(),
    is_available: z.boolean(),
});

export type MenuItemData = z.infer<typeof MenuItemSchema>;

interface MenuItemState {
    MenuItemData: MenuItemData;
    updateMenuItemField: <K extends keyof MenuItemData>(key: K, value: MenuItemData[K]) => void;
}

export const useMenuItemStore = create<MenuItemState>((set) => ({
    MenuItemData: {
        title: '',
        title_full: '',
        description: '',
        categories: [],
        price: 0,
        image_uri: '',
        is_available: false,
    },
    updateMenuItemField: <K extends keyof MenuItemData>(key: K, value: MenuItemData[K]) =>
        set((state) => ({
            MenuItemData: {
                ...state.MenuItemData,
                [key]: value,
            },
        })),
}));
