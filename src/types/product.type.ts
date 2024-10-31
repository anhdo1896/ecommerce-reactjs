import { Photo } from './photo.type'

export interface Product {
  id:  string
  name: string
  description: string
  price: number
  imagePhotos: null
  images: Photo[],
  categoryId: number
  categoryName: string
  brandId: number
  brandName: string
  rating: number
  priceBeforeDiscount: number
  quantity: number
  sold: number
  view: number
  photoDescription: null
}

export interface ProductList {
  data: Product[]
  pageIndex: number
  pageSize: number
  count: number
}

export interface ProductListConfig {
  pageIndex?: number | string
  pageSize?: number | string
  brandId?: number
  categoryId?: number
  ratingNumber?: number
  sort?: 'name' | 'sold' | 'view' | 'priceAsc' | 'priceDesc'
  priceMin?: number
  priceMax?: number
  search?: string
}
