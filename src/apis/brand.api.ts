import { Brand } from 'src/types/brand.type'
import { SuccessResponseApi } from 'src/types/utils.type'
import { httpGateway } from 'src/utils/http'

const URL = '/product/brands'

const brandsApi = {
  getBrands() {
    return httpGateway.get<SuccessResponseApi<Brand[]>>(URL)
  }
}
export default brandsApi
