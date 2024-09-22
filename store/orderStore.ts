import { create } from "zustand";
import { Item, OrderState } from "./interfaces";
import { toast } from "sonner-native";

const useOrderStore = create<OrderState>((set) => ({
  items: [],
  count: 0,
  addItem: (item: Item) =>
    set((state) => {
      state.count++;
      toast.success('Added item to order.', { duration: 750 })
      const hasItem = state.items.find((i) => i.id === item.id);

      if (hasItem) {
        return {
          items: state.items.map((i) => {
            if (i.id === item.id) {
              return { ...i, quantity: i.quantity + 1 };
            }
            return i;
          }),
        };
      } else {
        return {
          items: [...state.items, { ...item, quantity: 1 }],
        };
      }
    }),
  reduceItem: (item: Item) =>
    set((state) => {
      return {
        items: state.items
          .map((i) => {
            if (i.id === item.id) {
              toast.info('Removed item from order.', { duration: 750 })
              state.count--;
              return { ...i, quantity: i.quantity - 1 };
            }
            return i;
          })
          .filter((i) => i.quantity > 0),
      };
    }),
  clearOrder: () =>
    set(() => {
      return {
        count: 0,
        items: [],
      };
    }),
}));

export default useOrderStore;
