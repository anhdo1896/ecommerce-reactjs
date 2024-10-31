import { Product } from './product.type'

export interface Cart {
  cartHeader: CartHeader
  cartDetails: CartDetail[]
}

export interface CartHeader {
  cartHeaderId?: number
  userId: string
  couponCode?: string
  discount?: number
  cartTotal?: number
  name?: string
  phone?: string
  email?: string
}

export interface CartDetail {
  cartDetailsId?: number
  cartHeaderId?: number
  cartHeader?: CartHeader
  productId: string
  product: Product
  count: number
}

export interface ExtendedPurchases extends CartDetail {
  disabled: boolean
  checked: boolean
}