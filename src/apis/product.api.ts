import { Product, ProductList, ProductListConfig } from 'src/types/product.type'
import { SuccessResponseApi } from 'src/types/utils.type'
import { httpGateway } from 'src/utils/http'

const URL = '/product'
const productApi = {
  getProduct(params: ProductListConfig) {
    return httpGateway.get<SuccessResponseApi<ProductList>>(URL, { params })
  },
  getProductDetail(id: string) {
    return httpGateway.get<SuccessResponseApi<Product>>(`${URL}/${id}`)
  }
}

export default productApi
