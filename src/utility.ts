// Utility Types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

//* needed value
type ProductSummary = Pick<Product, "id" | "name" | "price">;

//! no needed value
type ProductWithoutStock = Omit<Product, "stock" | "color">;

//TODO all vale accept
type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
  id: 222,
  name: "Mouse",
  price: "20",
  stock: 100,
  color: "black",
};

//* partial means all optional (?)
type OptionProduct = Partial<Product>;

//* all value readonly
type ProductReadonly = Readonly<Product>;

const emptyObj: Record<string, unknown> = {};

const product1 = {
  id: 222,
  name: "Mouse",
  price: "20",
};
