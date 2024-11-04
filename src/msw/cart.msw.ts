import { http, HttpResponse } from 'msw'
import config from '../constants/config'

const detailResponse = {
  cartHeader: {
    cartHeaderId: 4041,
    userId: '189bff98-9cde-44cc-a10c-d2faac5fe3f2',
    couponCode: null,
    discount: 0,
    cartTotal: 150,
    name: null,
    phone: null,
    email: null
  },
  cartDetails: [
    {
      cartDetailsId: 4058,
      cartHeaderId: 4041,
      productId: 1027,
      product: {
        id: 1027,
        name: 'Nike C1TY is engineered to overcome anything the city throws your way. A mesh upper keeps the fit breathable, while the reinforced sides and toe box help protect your feet from the elements. Each colourway is inspired by the spirit of city life—giving street style a whole new meaning.',
        description:
          'Nike C1TY is engineered to overcome anything the city throws your way. A mesh upper keeps the fit breathable, while the reinforced sides and toe box help protect your feet from the elements. Each colourway is inspired by the spirit of city life—giving street style a whole new meaning.   Colour Shown: Cement Grey/Anthracite/Hyper Pink/Summit White Style: FZ3863-005 Country/Region of Origin: India',
        price: 150,
        images: [
          {
            url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
            description: 'Nike C1TY',
            dateAdded: '0001-01-01T00:00:00',
            isMain: false,
            productId: 1027,
            publicId: 'admin'
          },
          {
            url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
            description: 'Nike C1TY',
            dateAdded: '0001-01-01T00:00:00',
            isMain: false,
            productId: 1027,
            publicId: 'admin'
          },
          {
            url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
            description: 'Nike C1TY',
            dateAdded: '0001-01-01T00:00:00',
            isMain: false,
            productId: 1027,
            publicId: 'admin'
          },
          {
            url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.png',
            description: 'Nike C1TY',
            dateAdded: '0001-01-01T00:00:00',
            isMain: false,
            productId: 1027,
            publicId: 'admin'
          }
        ],
        categoryId: 1007,
        brandId: 1,
        rating: 3.8,
        priceBeforeDiscount: 180,
        quantity: 10,
        sold: 100,
        view: 1200
      },
      count: 1
    }
  ]
}
export const cartMock = [
  http.get(`${config.baseUrlGateway}/cart/getcart/189bff98-9cde-44cc-a10c-d2faac5fe3f2`, () => {
    return HttpResponse.json({ data: detailResponse })
  })
]
