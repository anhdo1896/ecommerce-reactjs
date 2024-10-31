export interface Stripe {
  stripeSessionUrl?: string
  stripeSessionId?: string
  approvedUrl?: string
  cancelUrl?: string
  orderHeader: OrderHeader
}

export interface OrderHeader {
  orderHeaderId: number
  userId: string
  couponCode: string
  discount: number
  orderTotal: number
  name: string
  phone: string
  email: string
  orderTime: string
  status: string
  paymentIntentId: string
  stripeSessionId: string
  orderDetails: OrderDetail[]
}

export interface OrderDetail {
  orderDetailsId: number
  orderHeaderId: number
  productId: number | string
  product: {}
  count: number
  productName: string
  productImage: string
  price: number
}
