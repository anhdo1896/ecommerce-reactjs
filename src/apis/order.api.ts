import { Cart } from 'src/types/cart.type'
import { OrderHeader, Stripe } from 'src/types/order.type'
import { SuccessResponseApi } from 'src/types/utils.type'
import { httpGateway } from 'src/utils/http'

const URL = '/order'
const orderApi = {
  createOrder(params: Cart) {
    return httpGateway.post<SuccessResponseApi<OrderHeader>>(`${URL}/createOrder`, params)
  },
  createStripeSession(params: Stripe) {
    return httpGateway.post<SuccessResponseApi<Stripe>>(`${URL}/createstripesession`, params)
  },
  validateStripeSession(orderHeaderId: Number) {
    return httpGateway.post<SuccessResponseApi<OrderHeader>>(`${URL}/validatestripesession`, orderHeaderId)
  },
  updateorderstatus(orderId: number, newStatus: string) {
    return httpGateway.post<SuccessResponseApi<OrderHeader>>(`${URL}/updateorderstatus/${orderId}`, newStatus)
  },
  getOrderStatus(userId: string, status: string) {
    return httpGateway.get<SuccessResponseApi<OrderHeader[]>>(`${URL}/getorderbystatus/${userId}/${status}`)
  }
}

export default orderApi
