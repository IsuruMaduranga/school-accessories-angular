export class OrderItem {
  product_id: number;
  order_id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  descript: string;
  quantity:number;

  getTotalPrice(){
    return this.price * this.quantity;
  }
}
