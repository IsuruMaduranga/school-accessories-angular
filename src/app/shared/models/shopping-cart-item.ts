export class ShoppingCartItem {
  product_id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  category: string;
  descript: string;

  constructor(
    key: number,
    title: string,
    imageUrl: string,
    price: number,
    quantity: number,
    category: string,
    descript: string
  ) {
    this.product_id = key;
    this.title = title;
    this.image = imageUrl;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.descript = descript;
  }

  get totalPrice() {
    return this.quantity * this.price;
  }
}
