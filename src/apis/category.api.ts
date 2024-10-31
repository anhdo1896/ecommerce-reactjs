import { Category } from 'src/types/category.type'
import { SuccessResponseApi } from 'src/types/utils.type'
import { httpGateway } from 'src/utils/http'

const URL = '/product/categories'

const categoryApi = {
  getCategories() {
    return httpGateway.get<SuccessResponseApi<Category[]>>(URL)
  }
}
export default categoryApi
