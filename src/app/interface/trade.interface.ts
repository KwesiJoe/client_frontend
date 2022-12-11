export interface Trade {
  product: string;
  quantity: number;
  price: number;
  side: string;
  status: string;
  orderId: string;
}