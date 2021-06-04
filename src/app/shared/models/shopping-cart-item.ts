import { Product } from './product';

export class ShoppingCartItem {
  product_id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  category_id: number;
  descript: string;

  constructor(
    key: number,
    title: string,
    imageUrl: string,
    price: number,
    quantity: number,
    category: number,
    descript: string
  ) {
    this.product_id = key;
    this.title = title;
    this.image = imageUrl;
    this.price = price;
    this.quantity = quantity;
    this.category_id = category;
    this.descript = descript;
  }

  get totalPrice() {
    return this.quantity * this.price;
  }
}
