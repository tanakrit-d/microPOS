export interface Item {
  id: number;
  title: string;
  price: number;
  description?: string;
  category: string | string[];
  image?: any;
}

export interface Order {
  _id: number;
  total: string;
  table: string;
  guests?: number;
  createdAt: string;
  user: any;
}

export interface ListUpdate {
  triggerUpdate: (id: number) => void;
  setTriggerUpdate: (callback: (id: number) => void) => void;
}

export interface OrderState {
  items: (Item & { quantity: number })[];
  addItem: (item: Item) => void;
  reduceItem: (item: Item) => void;
  clearOrder: () => void;
  count: number;
}
