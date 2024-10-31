import { Cart } from 'src/types/cart.type'
import { SuccessResponseApi } from 'src/types/utils.type'
import { httpGateway } from 'src/utils/http'

const URL = '/cart'
const cartApi = {
  addToCart(params: Cart) {
    return httpGateway.post<SuccessResponseApi<Cart>>(`${URL}/cartupsert`, params)
  },
  getCart(userId: string) {
    return httpGateway.get<SuccessResponseApi<Cart>>(`${URL}/getcart/${userId}`)
  },
  removeCart(cartDetailsIds: Number[]) {
    return httpGateway.post<SuccessResponseApi<any>>(`${URL}/removecart`,   cartDetailsIds )
  },
  applyCoupon(userId: string) {
    return httpGateway.get<SuccessResponseApi<Cart>>(`${URL}/${userId}`)
  }
}

export default cartApi
