export type Pizza = {
  id: string;
  name: string;
  imageUrl: string;
  type: string;
  size: number;
  price: number;
  count: number;
};

export type PizzaBlock = {
    id: string;
    name: string;
    imageUrl: string;
    types: number[];
    sizes: number[];
    price: number;
    count: number;
  };
