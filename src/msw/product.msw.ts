import { http, HttpResponse } from 'msw'
import config from '../constants/config'

const productResponse = {
  pageIndex: 1,
  pageSize: 20,
  count: 12,
  data: [
    {
      id: 1033,
      name: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
      description:
        'Product Details Features ABZORB midsole absorbs impact through a combination of cushioning and compression resistance   311 grams (11 oz) Material Durable synthetic material Style #: MR530GA',
      price: 100,
      imagePhotos: null,
      images: [
        {
          url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
          description: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
            price: 100,
            description:
              'Product Details Features ABZORB midsole absorbs impact through a combination of cushioning and compression resistance   311 grams (11 oz) Material Durable synthetic material Style #: MR530GA',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1008,
            brand: {
              name: 'New Balance',
              id: 1008
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
                description:
                  'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1033,
                publicId: 'admin',
                id: 1035
              },
              {
                url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
                description:
                  'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1033,
                publicId: 'admin',
                id: 1036
              }
            ],
            image: null,
            rating: 2.5,
            priceBeforeDiscount: 190,
            quantity: 12,
            sold: 190,
            view: 4000,
            id: 1033
          },
          productId: 1033,
          publicId: 'admin',
          id: 1034
        },
        {
          url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
          description: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
            price: 100,
            description:
              'Product Details Features ABZORB midsole absorbs impact through a combination of cushioning and compression resistance   311 grams (11 oz) Material Durable synthetic material Style #: MR530GA',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1008,
            brand: {
              name: 'New Balance',
              id: 1008
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
                description:
                  'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1033,
                publicId: 'admin',
                id: 1034
              },
              {
                url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
                description:
                  'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1033,
                publicId: 'admin',
                id: 1036
              }
            ],
            image: null,
            rating: 2.5,
            priceBeforeDiscount: 190,
            quantity: 12,
            sold: 190,
            view: 4000,
            id: 1033
          },
          productId: 1033,
          publicId: 'admin',
          id: 1035
        },
        {
          url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
          description: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
            price: 100,
            description:
              'Product Details Features ABZORB midsole absorbs impact through a combination of cushioning and compression resistance   311 grams (11 oz) Material Durable synthetic material Style #: MR530GA',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1008,
            brand: {
              name: 'New Balance',
              id: 1008
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
                description:
                  'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1033,
                publicId: 'admin',
                id: 1034
              },
              {
                url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
                description:
                  'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1033,
                publicId: 'admin',
                id: 1035
              }
            ],
            image: null,
            rating: 2.5,
            priceBeforeDiscount: 190,
            quantity: 12,
            sold: 190,
            view: 4000,
            id: 1033
          },
          productId: 1033,
          publicId: 'admin',
          id: 1036
        }
      ],
      categoryId: 1012,
      brandId: 1008,
      rating: 2.5,
      priceBeforeDiscount: 190,
      quantity: 12,
      sold: 190,
      view: 4000,
      photoDescription: null
    },
    {
      id: 1034,
      name: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
      description:
        'Product Details Features ABZORB midsole absorbs impact through a combination of cushioning and compression resistance   311 grams (11 oz) Material Durable synthetic material Style #: MR530GA',
      price: 100,
      imagePhotos: null,
      images: [
        {
          url: 'https://localhost:7000/ProductImages/1034_2024-10-23_03-28-39-PM.jpg',
          description: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
            price: 100,
            description:
              'Product Details Features ABZORB midsole absorbs impact through a combination of cushioning and compression resistance   311 grams (11 oz) Material Durable synthetic material Style #: MR530GA',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1008,
            brand: {
              name: 'New Balance',
              id: 1008
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1034_2024-10-23_03-29-31-PM.jpg',
                description:
                  'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1034,
                publicId: 'admin',
                id: 1038
              },
              {
                url: 'https://localhost:7000/ProductImages/1034_2024-10-23_03-29-46-PM.jpg',
                description:
                  'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1034,
                publicId: 'admin',
                id: 1039
              }
            ],
            image: null,
            rating: 2.5,
            priceBeforeDiscount: 190,
            quantity: 12,
            sold: 190,
            view: 4000,
            id: 1034
          },
          productId: 1034,
          publicId: 'admin',
          id: 1037
        },
        {
          url: 'https://localhost:7000/ProductImages/1034_2024-10-23_03-29-31-PM.jpg',
          description: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
            price: 100,
            description:
              'Product Details Features ABZORB midsole absorbs impact through a combination of cushioning and compression resistance   311 grams (11 oz) Material Durable synthetic material Style #: MR530GA',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1008,
            brand: {
              name: 'New Balance',
              id: 1008
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1034_2024-10-23_03-28-39-PM.jpg',
                description:
                  'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1034,
                publicId: 'admin',
                id: 1037
              },
              {
                url: 'https://localhost:7000/ProductImages/1034_2024-10-23_03-29-46-PM.jpg',
                description:
                  'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1034,
                publicId: 'admin',
                id: 1039
              }
            ],
            image: null,
            rating: 2.5,
            priceBeforeDiscount: 190,
            quantity: 12,
            sold: 190,
            view: 4000,
            id: 1034
          },
          productId: 1034,
          publicId: 'admin',
          id: 1038
        },
        {
          url: 'https://localhost:7000/ProductImages/1034_2024-10-23_03-29-46-PM.jpg',
          description: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
            price: 100,
            description:
              'Product Details Features ABZORB midsole absorbs impact through a combination of cushioning and compression resistance   311 grams (11 oz) Material Durable synthetic material Style #: MR530GA',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1008,
            brand: {
              name: 'New Balance',
              id: 1008
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1034_2024-10-23_03-28-39-PM.jpg',
                description:
                  'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1034,
                publicId: 'admin',
                id: 1037
              },
              {
                url: 'https://localhost:7000/ProductImages/1034_2024-10-23_03-29-31-PM.jpg',
                description:
                  'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1034,
                publicId: 'admin',
                id: 1038
              }
            ],
            image: null,
            rating: 2.5,
            priceBeforeDiscount: 190,
            quantity: 12,
            sold: 190,
            view: 4000,
            id: 1034
          },
          productId: 1034,
          publicId: 'admin',
          id: 1039
        }
      ],
      categoryId: 1012,
      brandId: 1008,
      rating: 2.5,
      priceBeforeDiscount: 190,
      quantity: 12,
      sold: 190,
      view: 4000,
      photoDescription: null
    },
    {
      id: 1039,
      name: 'Air Jordan 1 Mid',
      description:
        '<div class="css-1xnyxy7"><p class="nds-text pb4-sm css-1gn9yhm e1yhcai00 appearance-body1 color-primary weight-bold" data-testid="product-reason-to-buy"></p><p class="nds-text pb4-sm css-qtj9g7 e1yhcai00 appearance-body1 color-primary weight-regular" data-testid="product-description">Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.</p><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Benefits</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Leather, synthetic leather and textile upper for a supportive feel.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Foam midsole and Nike Air cushioning provide lightweight comfort.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Rubber outsole with pivot circle gives you durable traction.</li></ul></div><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Product details</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Colour Shown: White/Wolf Grey/Midnight Navy</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Style: DQ8426-104</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Country/Region of Origin: Indonesia, Vietnam</li></ul></div><div data-testid="benefit-section"></div></div>',
      price: 150,
      imagePhotos: null,
      images: [
        {
          url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM0.jpg',
          description: 'Nike',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Air Jordan 1 Mid',
            price: 150,
            description:
              '<div class="css-1xnyxy7"><p class="nds-text pb4-sm css-1gn9yhm e1yhcai00 appearance-body1 color-primary weight-bold" data-testid="product-reason-to-buy"></p><p class="nds-text pb4-sm css-qtj9g7 e1yhcai00 appearance-body1 color-primary weight-regular" data-testid="product-description">Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.</p><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Benefits</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Leather, synthetic leather and textile upper for a supportive feel.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Foam midsole and Nike Air cushioning provide lightweight comfort.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Rubber outsole with pivot circle gives you durable traction.</li></ul></div><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Product details</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Colour Shown: White/Wolf Grey/Midnight Navy</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Style: DQ8426-104</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Country/Region of Origin: Indonesia, Vietnam</li></ul></div><div data-testid="benefit-section"></div></div>',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM1.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1067
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM2.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1068
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM3.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1069
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM4.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1070
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM5.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1071
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM6.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1072
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM7.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1073
              }
            ],
            image: null,
            rating: 5,
            priceBeforeDiscount: 180,
            quantity: 5000,
            sold: 10000,
            view: 24000,
            id: 1039
          },
          productId: 1039,
          publicId: 'admin',
          id: 1066
        },
        {
          url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM1.jpg',
          description: 'Nike',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Air Jordan 1 Mid',
            price: 150,
            description:
              '<div class="css-1xnyxy7"><p class="nds-text pb4-sm css-1gn9yhm e1yhcai00 appearance-body1 color-primary weight-bold" data-testid="product-reason-to-buy"></p><p class="nds-text pb4-sm css-qtj9g7 e1yhcai00 appearance-body1 color-primary weight-regular" data-testid="product-description">Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.</p><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Benefits</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Leather, synthetic leather and textile upper for a supportive feel.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Foam midsole and Nike Air cushioning provide lightweight comfort.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Rubber outsole with pivot circle gives you durable traction.</li></ul></div><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Product details</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Colour Shown: White/Wolf Grey/Midnight Navy</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Style: DQ8426-104</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Country/Region of Origin: Indonesia, Vietnam</li></ul></div><div data-testid="benefit-section"></div></div>',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM0.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1066
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM2.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1068
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM3.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1069
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM4.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1070
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM5.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1071
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM6.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1072
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM7.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1073
              }
            ],
            image: null,
            rating: 5,
            priceBeforeDiscount: 180,
            quantity: 5000,
            sold: 10000,
            view: 24000,
            id: 1039
          },
          productId: 1039,
          publicId: 'admin',
          id: 1067
        },
        {
          url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM2.jpg',
          description: 'Nike',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Air Jordan 1 Mid',
            price: 150,
            description:
              '<div class="css-1xnyxy7"><p class="nds-text pb4-sm css-1gn9yhm e1yhcai00 appearance-body1 color-primary weight-bold" data-testid="product-reason-to-buy"></p><p class="nds-text pb4-sm css-qtj9g7 e1yhcai00 appearance-body1 color-primary weight-regular" data-testid="product-description">Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.</p><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Benefits</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Leather, synthetic leather and textile upper for a supportive feel.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Foam midsole and Nike Air cushioning provide lightweight comfort.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Rubber outsole with pivot circle gives you durable traction.</li></ul></div><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Product details</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Colour Shown: White/Wolf Grey/Midnight Navy</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Style: DQ8426-104</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Country/Region of Origin: Indonesia, Vietnam</li></ul></div><div data-testid="benefit-section"></div></div>',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM0.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1066
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM1.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1067
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM3.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1069
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM4.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1070
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM5.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1071
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM6.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1072
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM7.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1073
              }
            ],
            image: null,
            rating: 5,
            priceBeforeDiscount: 180,
            quantity: 5000,
            sold: 10000,
            view: 24000,
            id: 1039
          },
          productId: 1039,
          publicId: 'admin',
          id: 1068
        },
        {
          url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM3.jpg',
          description: 'Nike',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Air Jordan 1 Mid',
            price: 150,
            description:
              '<div class="css-1xnyxy7"><p class="nds-text pb4-sm css-1gn9yhm e1yhcai00 appearance-body1 color-primary weight-bold" data-testid="product-reason-to-buy"></p><p class="nds-text pb4-sm css-qtj9g7 e1yhcai00 appearance-body1 color-primary weight-regular" data-testid="product-description">Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.</p><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Benefits</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Leather, synthetic leather and textile upper for a supportive feel.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Foam midsole and Nike Air cushioning provide lightweight comfort.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Rubber outsole with pivot circle gives you durable traction.</li></ul></div><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Product details</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Colour Shown: White/Wolf Grey/Midnight Navy</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Style: DQ8426-104</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Country/Region of Origin: Indonesia, Vietnam</li></ul></div><div data-testid="benefit-section"></div></div>',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM0.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1066
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM1.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1067
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM2.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1068
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM4.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1070
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM5.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1071
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM6.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1072
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM7.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1073
              }
            ],
            image: null,
            rating: 5,
            priceBeforeDiscount: 180,
            quantity: 5000,
            sold: 10000,
            view: 24000,
            id: 1039
          },
          productId: 1039,
          publicId: 'admin',
          id: 1069
        },
        {
          url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM4.jpg',
          description: 'Nike',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Air Jordan 1 Mid',
            price: 150,
            description:
              '<div class="css-1xnyxy7"><p class="nds-text pb4-sm css-1gn9yhm e1yhcai00 appearance-body1 color-primary weight-bold" data-testid="product-reason-to-buy"></p><p class="nds-text pb4-sm css-qtj9g7 e1yhcai00 appearance-body1 color-primary weight-regular" data-testid="product-description">Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.</p><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Benefits</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Leather, synthetic leather and textile upper for a supportive feel.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Foam midsole and Nike Air cushioning provide lightweight comfort.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Rubber outsole with pivot circle gives you durable traction.</li></ul></div><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Product details</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Colour Shown: White/Wolf Grey/Midnight Navy</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Style: DQ8426-104</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Country/Region of Origin: Indonesia, Vietnam</li></ul></div><div data-testid="benefit-section"></div></div>',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM0.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1066
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM1.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1067
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM2.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1068
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM3.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1069
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM5.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1071
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM6.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1072
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM7.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1073
              }
            ],
            image: null,
            rating: 5,
            priceBeforeDiscount: 180,
            quantity: 5000,
            sold: 10000,
            view: 24000,
            id: 1039
          },
          productId: 1039,
          publicId: 'admin',
          id: 1070
        },
        {
          url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM5.jpg',
          description: 'Nike',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Air Jordan 1 Mid',
            price: 150,
            description:
              '<div class="css-1xnyxy7"><p class="nds-text pb4-sm css-1gn9yhm e1yhcai00 appearance-body1 color-primary weight-bold" data-testid="product-reason-to-buy"></p><p class="nds-text pb4-sm css-qtj9g7 e1yhcai00 appearance-body1 color-primary weight-regular" data-testid="product-description">Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.</p><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Benefits</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Leather, synthetic leather and textile upper for a supportive feel.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Foam midsole and Nike Air cushioning provide lightweight comfort.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Rubber outsole with pivot circle gives you durable traction.</li></ul></div><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Product details</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Colour Shown: White/Wolf Grey/Midnight Navy</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Style: DQ8426-104</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Country/Region of Origin: Indonesia, Vietnam</li></ul></div><div data-testid="benefit-section"></div></div>',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM0.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1066
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM1.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1067
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM2.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1068
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM3.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1069
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM4.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1070
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM6.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1072
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM7.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1073
              }
            ],
            image: null,
            rating: 5,
            priceBeforeDiscount: 180,
            quantity: 5000,
            sold: 10000,
            view: 24000,
            id: 1039
          },
          productId: 1039,
          publicId: 'admin',
          id: 1071
        },
        {
          url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM6.jpg',
          description: 'Nike',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Air Jordan 1 Mid',
            price: 150,
            description:
              '<div class="css-1xnyxy7"><p class="nds-text pb4-sm css-1gn9yhm e1yhcai00 appearance-body1 color-primary weight-bold" data-testid="product-reason-to-buy"></p><p class="nds-text pb4-sm css-qtj9g7 e1yhcai00 appearance-body1 color-primary weight-regular" data-testid="product-description">Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.</p><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Benefits</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Leather, synthetic leather and textile upper for a supportive feel.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Foam midsole and Nike Air cushioning provide lightweight comfort.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Rubber outsole with pivot circle gives you durable traction.</li></ul></div><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Product details</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Colour Shown: White/Wolf Grey/Midnight Navy</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Style: DQ8426-104</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Country/Region of Origin: Indonesia, Vietnam</li></ul></div><div data-testid="benefit-section"></div></div>',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM0.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1066
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM1.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1067
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM2.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1068
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM3.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1069
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM4.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1070
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM5.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1071
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM7.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1073
              }
            ],
            image: null,
            rating: 5,
            priceBeforeDiscount: 180,
            quantity: 5000,
            sold: 10000,
            view: 24000,
            id: 1039
          },
          productId: 1039,
          publicId: 'admin',
          id: 1072
        },
        {
          url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM7.jpg',
          description: 'Nike',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Air Jordan 1 Mid',
            price: 150,
            description:
              '<div class="css-1xnyxy7"><p class="nds-text pb4-sm css-1gn9yhm e1yhcai00 appearance-body1 color-primary weight-bold" data-testid="product-reason-to-buy"></p><p class="nds-text pb4-sm css-qtj9g7 e1yhcai00 appearance-body1 color-primary weight-regular" data-testid="product-description">Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colours and crisp leather give it a distinct identity.</p><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Benefits</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Leather, synthetic leather and textile upper for a supportive feel.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Foam midsole and Nike Air cushioning provide lightweight comfort.</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Rubber outsole with pivot circle gives you durable traction.</li></ul></div><div data-testid="benefit-section"></div><div data-testid="benefit-section"><h4 class="nds-text pb2-sm css-1m2rxfq e1yhcai00 appearance-title4 color-primary weight-regular" data-testid="benefit-header">Product details</h4><ul class="ncss-list-ul pb4-sm" data-testid="benefit-list"><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Colour Shown: White/Wolf Grey/Midnight Navy</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Style: DQ8426-104</li><li class="nds-text ncss-li css-xlkxpi e1yhcai00 appearance-body1 color-primary weight-regular">Country/Region of Origin: Indonesia, Vietnam</li></ul></div><div data-testid="benefit-section"></div></div>',
            categoryId: 1012,
            category: {
              name: 'Training & Gym',
              id: 1012
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM0.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1066
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM1.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1067
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM2.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1068
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM3.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1069
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM4.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1070
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM5.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1071
              },
              {
                url: 'https://localhost:7000/ProductImages/1039_2024-10-23_08-54-05-PM6.jpg',
                description: 'Nike',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1039,
                publicId: 'admin',
                id: 1072
              }
            ],
            image: null,
            rating: 5,
            priceBeforeDiscount: 180,
            quantity: 5000,
            sold: 10000,
            view: 24000,
            id: 1039
          },
          productId: 1039,
          publicId: 'admin',
          id: 1073
        }
      ],
      categoryId: 1012,
      brandId: 1,
      rating: 5,
      priceBeforeDiscount: 180,
      quantity: 5000,
      sold: 10000,
      view: 24000,
      photoDescription: null
    },
    {
      id: 1032,
      name: 'FuelCell SuperComp Pacer v2',
      description:
        'FuelCell foam delivers a propulsive feel to help drive you forward Energy Arc pairs sport-specific carbon fiber plate geometry with strategic midsole voids, designed to increase stored energy to deliver a higher amount of total energy returned Angular midsole design reduces weight Spray painted logo for weight savings   214 grams (7.5 oz)',
      price: 290,
      imagePhotos: null,
      images: [
        {
          url: 'https://localhost:7000/ProductImages/1032_2024-10-22_06-59-23-PM.jpg',
          description: 'FuelCell SuperComp Pacer v2',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'FuelCell SuperComp Pacer v2',
            price: 290,
            description:
              'FuelCell foam delivers a propulsive feel to help drive you forward Energy Arc pairs sport-specific carbon fiber plate geometry with strategic midsole voids, designed to increase stored energy to deliver a higher amount of total energy returned Angular midsole design reduces weight Spray painted logo for weight savings   214 grams (7.5 oz)',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1008,
            brand: {
              name: 'New Balance',
              id: 1008
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1032_2024-10-22_06-59-23-PM.jpg',
                description: 'FuelCell SuperComp Pacer v2',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1032,
                publicId: 'admin',
                id: 1032
              },
              {
                url: 'https://localhost:7000/ProductImages/1032_2024-10-22_06-59-23-PM.jpg',
                description: 'FuelCell SuperComp Pacer v2',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1032,
                publicId: 'admin',
                id: 1033
              }
            ],
            image: null,
            rating: 3.6,
            priceBeforeDiscount: 300,
            quantity: 20,
            sold: 20,
            view: 170,
            id: 1032
          },
          productId: 1032,
          publicId: 'admin',
          id: 1031
        },
        {
          url: 'https://localhost:7000/ProductImages/1032_2024-10-22_06-59-23-PM.jpg',
          description: 'FuelCell SuperComp Pacer v2',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'FuelCell SuperComp Pacer v2',
            price: 290,
            description:
              'FuelCell foam delivers a propulsive feel to help drive you forward Energy Arc pairs sport-specific carbon fiber plate geometry with strategic midsole voids, designed to increase stored energy to deliver a higher amount of total energy returned Angular midsole design reduces weight Spray painted logo for weight savings   214 grams (7.5 oz)',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1008,
            brand: {
              name: 'New Balance',
              id: 1008
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1032_2024-10-22_06-59-23-PM.jpg',
                description: 'FuelCell SuperComp Pacer v2',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1032,
                publicId: 'admin',
                id: 1031
              },
              {
                url: 'https://localhost:7000/ProductImages/1032_2024-10-22_06-59-23-PM.jpg',
                description: 'FuelCell SuperComp Pacer v2',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1032,
                publicId: 'admin',
                id: 1033
              }
            ],
            image: null,
            rating: 3.6,
            priceBeforeDiscount: 300,
            quantity: 20,
            sold: 20,
            view: 170,
            id: 1032
          },
          productId: 1032,
          publicId: 'admin',
          id: 1032
        },
        {
          url: 'https://localhost:7000/ProductImages/1032_2024-10-22_06-59-23-PM.jpg',
          description: 'FuelCell SuperComp Pacer v2',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'FuelCell SuperComp Pacer v2',
            price: 290,
            description:
              'FuelCell foam delivers a propulsive feel to help drive you forward Energy Arc pairs sport-specific carbon fiber plate geometry with strategic midsole voids, designed to increase stored energy to deliver a higher amount of total energy returned Angular midsole design reduces weight Spray painted logo for weight savings   214 grams (7.5 oz)',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1008,
            brand: {
              name: 'New Balance',
              id: 1008
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1032_2024-10-22_06-59-23-PM.jpg',
                description: 'FuelCell SuperComp Pacer v2',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1032,
                publicId: 'admin',
                id: 1031
              },
              {
                url: 'https://localhost:7000/ProductImages/1032_2024-10-22_06-59-23-PM.jpg',
                description: 'FuelCell SuperComp Pacer v2',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1032,
                publicId: 'admin',
                id: 1032
              }
            ],
            image: null,
            rating: 3.6,
            priceBeforeDiscount: 300,
            quantity: 20,
            sold: 20,
            view: 170,
            id: 1032
          },
          productId: 1032,
          publicId: 'admin',
          id: 1033
        }
      ],
      categoryId: 1009,
      brandId: 1008,
      rating: 3.6,
      priceBeforeDiscount: 300,
      quantity: 20,
      sold: 20,
      view: 170,
      photoDescription: null
    },
    {
      id: 1027,
      name: 'Nike C1TY is engineered to overcome anything the city throws your way. A mesh upper keeps the fit breathable, while the reinforced sides and toe box help protect your feet from the elements. Each colourway is inspired by the spirit of city life—giving street style a whole new meaning.',
      description:
        'Nike C1TY is engineered to overcome anything the city throws your way. A mesh upper keeps the fit breathable, while the reinforced sides and toe box help protect your feet from the elements. Each colourway is inspired by the spirit of city life—giving street style a whole new meaning.   Colour Shown: Cement Grey/Anthracite/Hyper Pink/Summit White Style: FZ3863-005 Country/Region of Origin: India',
      price: 150,
      imagePhotos: null,
      images: [
        {
          url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
          description: 'Nike C1TY',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Nike C1TY is engineered to overcome anything the city throws your way. A mesh upper keeps the fit breathable, while the reinforced sides and toe box help protect your feet from the elements. Each colourway is inspired by the spirit of city life—giving street style a whole new meaning.',
            price: 150,
            description:
              'Nike C1TY is engineered to overcome anything the city throws your way. A mesh upper keeps the fit breathable, while the reinforced sides and toe box help protect your feet from the elements. Each colourway is inspired by the spirit of city life—giving street style a whole new meaning.   Colour Shown: Cement Grey/Anthracite/Hyper Pink/Summit White Style: FZ3863-005 Country/Region of Origin: India',
            categoryId: 1007,
            category: {
              name: 'Lifestyle',
              id: 1007
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
                description: 'Nike C1TY',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1027,
                publicId: 'admin',
                id: 1017
              },
              {
                url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
                description: 'Nike C1TY',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1027,
                publicId: 'admin',
                id: 1018
              },
              {
                url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.png',
                description: 'Nike C1TY',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1027,
                publicId: 'admin',
                id: 1019
              }
            ],
            image: null,
            rating: 3.8,
            priceBeforeDiscount: 180,
            quantity: 10,
            sold: 100,
            view: 1200,
            id: 1027
          },
          productId: 1027,
          publicId: 'admin',
          id: 1016
        },
        {
          url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
          description: 'Nike C1TY',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Nike C1TY is engineered to overcome anything the city throws your way. A mesh upper keeps the fit breathable, while the reinforced sides and toe box help protect your feet from the elements. Each colourway is inspired by the spirit of city life—giving street style a whole new meaning.',
            price: 150,
            description:
              'Nike C1TY is engineered to overcome anything the city throws your way. A mesh upper keeps the fit breathable, while the reinforced sides and toe box help protect your feet from the elements. Each colourway is inspired by the spirit of city life—giving street style a whole new meaning.   Colour Shown: Cement Grey/Anthracite/Hyper Pink/Summit White Style: FZ3863-005 Country/Region of Origin: India',
            categoryId: 1007,
            category: {
              name: 'Lifestyle',
              id: 1007
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
                description: 'Nike C1TY',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1027,
                publicId: 'admin',
                id: 1016
              },
              {
                url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
                description: 'Nike C1TY',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1027,
                publicId: 'admin',
                id: 1018
              },
              {
                url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.png',
                description: 'Nike C1TY',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1027,
                publicId: 'admin',
                id: 1019
              }
            ],
            image: null,
            rating: 3.8,
            priceBeforeDiscount: 180,
            quantity: 10,
            sold: 100,
            view: 1200,
            id: 1027
          },
          productId: 1027,
          publicId: 'admin',
          id: 1017
        },
        {
          url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
          description: 'Nike C1TY',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Nike C1TY is engineered to overcome anything the city throws your way. A mesh upper keeps the fit breathable, while the reinforced sides and toe box help protect your feet from the elements. Each colourway is inspired by the spirit of city life—giving street style a whole new meaning.',
            price: 150,
            description:
              'Nike C1TY is engineered to overcome anything the city throws your way. A mesh upper keeps the fit breathable, while the reinforced sides and toe box help protect your feet from the elements. Each colourway is inspired by the spirit of city life—giving street style a whole new meaning.   Colour Shown: Cement Grey/Anthracite/Hyper Pink/Summit White Style: FZ3863-005 Country/Region of Origin: India',
            categoryId: 1007,
            category: {
              name: 'Lifestyle',
              id: 1007
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
                description: 'Nike C1TY',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1027,
                publicId: 'admin',
                id: 1016
              },
              {
                url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
                description: 'Nike C1TY',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1027,
                publicId: 'admin',
                id: 1017
              },
              {
                url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.png',
                description: 'Nike C1TY',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1027,
                publicId: 'admin',
                id: 1019
              }
            ],
            image: null,
            rating: 3.8,
            priceBeforeDiscount: 180,
            quantity: 10,
            sold: 100,
            view: 1200,
            id: 1027
          },
          productId: 1027,
          publicId: 'admin',
          id: 1018
        },
        {
          url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.png',
          description: 'Nike C1TY',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Nike C1TY is engineered to overcome anything the city throws your way. A mesh upper keeps the fit breathable, while the reinforced sides and toe box help protect your feet from the elements. Each colourway is inspired by the spirit of city life—giving street style a whole new meaning.',
            price: 150,
            description:
              'Nike C1TY is engineered to overcome anything the city throws your way. A mesh upper keeps the fit breathable, while the reinforced sides and toe box help protect your feet from the elements. Each colourway is inspired by the spirit of city life—giving street style a whole new meaning.   Colour Shown: Cement Grey/Anthracite/Hyper Pink/Summit White Style: FZ3863-005 Country/Region of Origin: India',
            categoryId: 1007,
            category: {
              name: 'Lifestyle',
              id: 1007
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
                description: 'Nike C1TY',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1027,
                publicId: 'admin',
                id: 1016
              },
              {
                url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
                description: 'Nike C1TY',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1027,
                publicId: 'admin',
                id: 1017
              },
              {
                url: 'https://localhost:7000/ProductImages/1027_2024-10-22_06-43-17-PM.jpg',
                description: 'Nike C1TY',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1027,
                publicId: 'admin',
                id: 1018
              }
            ],
            image: null,
            rating: 3.8,
            priceBeforeDiscount: 180,
            quantity: 10,
            sold: 100,
            view: 1200,
            id: 1027
          },
          productId: 1027,
          publicId: 'admin',
          id: 1019
        }
      ],
      categoryId: 1007,
      brandId: 1,
      rating: 3.8,
      priceBeforeDiscount: 180,
      quantity: 10,
      sold: 100,
      view: 1200,
      photoDescription: null
    },
    {
      id: 1028,
      name: 'Nike Dunk Low Premium Enjoy the finer things in life with this aged-to-perfection edition of a hoops-to-street icon. Premium leather with natural variations delivers wear-anywhere sophistication. For that varsity-level finish, red overlays bring the look home. Looks like this special sneaker collection is just getting started.',
      description:
        'Enjoy the finer things in life with this aged-to-perfection edition of a hoops-to-street icon. Premium leather with natural variations delivers wear-anywhere sophistication. For that varsity-level finish, red overlays bring the look home. Looks like this special sneaker collection is just getting started.   Colour Shown: White/Coconut Milk/Team Red Style: FJ4555-100 Country/Region of Origin: Indonesia',
      price: 170,
      imagePhotos: null,
      images: [
        {
          url: 'https://localhost:7000/ProductImages/1028_2024-10-22_06-45-06-PM.png',
          description: 'Nike Dunk Low Premium',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Nike Dunk Low Premium Enjoy the finer things in life with this aged-to-perfection edition of a hoops-to-street icon. Premium leather with natural variations delivers wear-anywhere sophistication. For that varsity-level finish, red overlays bring the look home. Looks like this special sneaker collection is just getting started.',
            price: 170,
            description:
              'Enjoy the finer things in life with this aged-to-perfection edition of a hoops-to-street icon. Premium leather with natural variations delivers wear-anywhere sophistication. For that varsity-level finish, red overlays bring the look home. Looks like this special sneaker collection is just getting started.   Colour Shown: White/Coconut Milk/Team Red Style: FJ4555-100 Country/Region of Origin: Indonesia',
            categoryId: 1007,
            category: {
              name: 'Lifestyle',
              id: 1007
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1028_2024-10-22_06-45-06-PM.png',
                description: 'Nike Dunk Low Premium',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1028,
                publicId: 'admin',
                id: 1021
              },
              {
                url: 'https://localhost:7000/ProductImages/1028_2024-10-22_06-45-06-PM.png',
                description: 'Nike Dunk Low Premium',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1028,
                publicId: 'admin',
                id: 1022
              }
            ],
            image: null,
            rating: 3.8,
            priceBeforeDiscount: 170,
            quantity: 10,
            sold: 20,
            view: 1000,
            id: 1028
          },
          productId: 1028,
          publicId: 'admin',
          id: 1020
        },
        {
          url: 'https://localhost:7000/ProductImages/1028_2024-10-22_06-45-06-PM.png',
          description: 'Nike Dunk Low Premium',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Nike Dunk Low Premium Enjoy the finer things in life with this aged-to-perfection edition of a hoops-to-street icon. Premium leather with natural variations delivers wear-anywhere sophistication. For that varsity-level finish, red overlays bring the look home. Looks like this special sneaker collection is just getting started.',
            price: 170,
            description:
              'Enjoy the finer things in life with this aged-to-perfection edition of a hoops-to-street icon. Premium leather with natural variations delivers wear-anywhere sophistication. For that varsity-level finish, red overlays bring the look home. Looks like this special sneaker collection is just getting started.   Colour Shown: White/Coconut Milk/Team Red Style: FJ4555-100 Country/Region of Origin: Indonesia',
            categoryId: 1007,
            category: {
              name: 'Lifestyle',
              id: 1007
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1028_2024-10-22_06-45-06-PM.png',
                description: 'Nike Dunk Low Premium',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1028,
                publicId: 'admin',
                id: 1020
              },
              {
                url: 'https://localhost:7000/ProductImages/1028_2024-10-22_06-45-06-PM.png',
                description: 'Nike Dunk Low Premium',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1028,
                publicId: 'admin',
                id: 1022
              }
            ],
            image: null,
            rating: 3.8,
            priceBeforeDiscount: 170,
            quantity: 10,
            sold: 20,
            view: 1000,
            id: 1028
          },
          productId: 1028,
          publicId: 'admin',
          id: 1021
        },
        {
          url: 'https://localhost:7000/ProductImages/1028_2024-10-22_06-45-06-PM.png',
          description: 'Nike Dunk Low Premium',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Nike Dunk Low Premium Enjoy the finer things in life with this aged-to-perfection edition of a hoops-to-street icon. Premium leather with natural variations delivers wear-anywhere sophistication. For that varsity-level finish, red overlays bring the look home. Looks like this special sneaker collection is just getting started.',
            price: 170,
            description:
              'Enjoy the finer things in life with this aged-to-perfection edition of a hoops-to-street icon. Premium leather with natural variations delivers wear-anywhere sophistication. For that varsity-level finish, red overlays bring the look home. Looks like this special sneaker collection is just getting started.   Colour Shown: White/Coconut Milk/Team Red Style: FJ4555-100 Country/Region of Origin: Indonesia',
            categoryId: 1007,
            category: {
              name: 'Lifestyle',
              id: 1007
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1028_2024-10-22_06-45-06-PM.png',
                description: 'Nike Dunk Low Premium',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1028,
                publicId: 'admin',
                id: 1020
              },
              {
                url: 'https://localhost:7000/ProductImages/1028_2024-10-22_06-45-06-PM.png',
                description: 'Nike Dunk Low Premium',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1028,
                publicId: 'admin',
                id: 1021
              }
            ],
            image: null,
            rating: 3.8,
            priceBeforeDiscount: 170,
            quantity: 10,
            sold: 20,
            view: 1000,
            id: 1028
          },
          productId: 1028,
          publicId: 'admin',
          id: 1022
        }
      ],
      categoryId: 1007,
      brandId: 1,
      rating: 3.8,
      priceBeforeDiscount: 170,
      quantity: 10,
      sold: 20,
      view: 1000,
      photoDescription: null
    },
    {
      id: 1031,
      name: "Nike Vaporfly 3 Men's Road Racing Shoes",
      description:
        "Catch 'em if you can. Giving you race-day speed to conquer any distance, the Nike Vaporfly 3 is made for the chasers, the racers, the elevated pacers who can't turn down the thrill of the pursuit. We reworked the leader of the super shoe pack and tuned the engine underneath to help you chase personal bests from a 10K to marathon. From elite runners to those new to racing, this versatile road-racing workhorse is for those who see speed as a gateway to more miles and more seemingly uncatchable highs.   Colour Shown: Sail/Volt/Pacific Moss/Glacier Blue Style: HQ3450-147 Country/Region of Origin: China",
      price: 330,
      imagePhotos: null,
      images: [
        {
          url: 'https://localhost:7000/ProductImages/1031_2024-10-22_06-56-25-PM.png',
          description: 'Nike Vaporfly 3',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: "Nike Vaporfly 3 Men's Road Racing Shoes",
            price: 330,
            description:
              "Catch 'em if you can. Giving you race-day speed to conquer any distance, the Nike Vaporfly 3 is made for the chasers, the racers, the elevated pacers who can't turn down the thrill of the pursuit. We reworked the leader of the super shoe pack and tuned the engine underneath to help you chase personal bests from a 10K to marathon. From elite runners to those new to racing, this versatile road-racing workhorse is for those who see speed as a gateway to more miles and more seemingly uncatchable highs.   Colour Shown: Sail/Volt/Pacific Moss/Glacier Blue Style: HQ3450-147 Country/Region of Origin: China",
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1031_2024-10-22_06-56-25-PM.png',
                description: 'Nike Vaporfly 3',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1031,
                publicId: 'admin',
                id: 1030
              }
            ],
            image: null,
            rating: 4.2,
            priceBeforeDiscount: 400,
            quantity: 390,
            sold: 370,
            view: 1700,
            id: 1031
          },
          productId: 1031,
          publicId: 'admin',
          id: 1029
        },
        {
          url: 'https://localhost:7000/ProductImages/1031_2024-10-22_06-56-25-PM.png',
          description: 'Nike Vaporfly 3',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: "Nike Vaporfly 3 Men's Road Racing Shoes",
            price: 330,
            description:
              "Catch 'em if you can. Giving you race-day speed to conquer any distance, the Nike Vaporfly 3 is made for the chasers, the racers, the elevated pacers who can't turn down the thrill of the pursuit. We reworked the leader of the super shoe pack and tuned the engine underneath to help you chase personal bests from a 10K to marathon. From elite runners to those new to racing, this versatile road-racing workhorse is for those who see speed as a gateway to more miles and more seemingly uncatchable highs.   Colour Shown: Sail/Volt/Pacific Moss/Glacier Blue Style: HQ3450-147 Country/Region of Origin: China",
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1,
            brand: {
              name: 'Nike',
              id: 1
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1031_2024-10-22_06-56-25-PM.png',
                description: 'Nike Vaporfly 3',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1031,
                publicId: 'admin',
                id: 1029
              }
            ],
            image: null,
            rating: 4.2,
            priceBeforeDiscount: 400,
            quantity: 390,
            sold: 370,
            view: 1700,
            id: 1031
          },
          productId: 1031,
          publicId: 'admin',
          id: 1030
        }
      ],
      categoryId: 1009,
      brandId: 1,
      rating: 4.2,
      priceBeforeDiscount: 400,
      quantity: 390,
      sold: 370,
      view: 1700,
      photoDescription: null
    },
    {
      id: 1030,
      name: "SAMBA ORIGINALS Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole, making it a staple in everyone's closet - on and off the pitch.",
      description:
        "SAMBA ORIGINALS Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole, making it a staple in everyone's closet - on and off the pitch.Regular fit Lace closure Full grain leather upper with gritty suede and gold foil details Synthetic leather lining; Gum rubber cupsole Gum rubber midsole Product colour: Cloud White / Core Black / Clear Granite Product code: B75806",
      price: 180,
      imagePhotos: null,
      images: [
        {
          url: 'https://localhost:7000/ProductImages/1030_2024-10-22_06-53-44-PM.jpg',
          description: 'Samba OG Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: "SAMBA ORIGINALS Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole, making it a staple in everyone's closet - on and off the pitch.",
            price: 180,
            description:
              "SAMBA ORIGINALS Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole, making it a staple in everyone's closet - on and off the pitch.Regular fit Lace closure Full grain leather upper with gritty suede and gold foil details Synthetic leather lining; Gum rubber cupsole Gum rubber midsole Product colour: Cloud White / Core Black / Clear Granite Product code: B75806",
            categoryId: 1007,
            category: {
              name: 'Lifestyle',
              id: 1007
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1030_2024-10-22_06-53-44-PM.avif',
                description: 'Samba OG Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1030,
                publicId: 'admin',
                id: 1027
              },
              {
                url: 'https://localhost:7000/ProductImages/1030_2024-10-22_06-53-44-PM.avif',
                description: 'Samba OG Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1030,
                publicId: 'admin',
                id: 1028
              }
            ],
            image: null,
            rating: 3.8,
            priceBeforeDiscount: 200,
            quantity: 10,
            sold: 200,
            view: 300,
            id: 1030
          },
          productId: 1030,
          publicId: 'admin',
          id: 1026
        },
        {
          url: 'https://localhost:7000/ProductImages/1030_2024-10-22_06-53-44-PM.avif',
          description: 'Samba OG Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: "SAMBA ORIGINALS Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole, making it a staple in everyone's closet - on and off the pitch.",
            price: 180,
            description:
              "SAMBA ORIGINALS Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole, making it a staple in everyone's closet - on and off the pitch.Regular fit Lace closure Full grain leather upper with gritty suede and gold foil details Synthetic leather lining; Gum rubber cupsole Gum rubber midsole Product colour: Cloud White / Core Black / Clear Granite Product code: B75806",
            categoryId: 1007,
            category: {
              name: 'Lifestyle',
              id: 1007
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1030_2024-10-22_06-53-44-PM.jpg',
                description: 'Samba OG Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1030,
                publicId: 'admin',
                id: 1026
              },
              {
                url: 'https://localhost:7000/ProductImages/1030_2024-10-22_06-53-44-PM.avif',
                description: 'Samba OG Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1030,
                publicId: 'admin',
                id: 1028
              }
            ],
            image: null,
            rating: 3.8,
            priceBeforeDiscount: 200,
            quantity: 10,
            sold: 200,
            view: 300,
            id: 1030
          },
          productId: 1030,
          publicId: 'admin',
          id: 1027
        },
        {
          url: 'https://localhost:7000/ProductImages/1030_2024-10-22_06-53-44-PM.avif',
          description: 'Samba OG Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: "SAMBA ORIGINALS Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole, making it a staple in everyone's closet - on and off the pitch.",
            price: 180,
            description:
              "SAMBA ORIGINALS Born on the pitch, the Samba is a timeless icon of street style. This silhouette stays true to its legacy with a tasteful, low-profile, soft leather upper, suede overlays and gum sole, making it a staple in everyone's closet - on and off the pitch.Regular fit Lace closure Full grain leather upper with gritty suede and gold foil details Synthetic leather lining; Gum rubber cupsole Gum rubber midsole Product colour: Cloud White / Core Black / Clear Granite Product code: B75806",
            categoryId: 1007,
            category: {
              name: 'Lifestyle',
              id: 1007
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1030_2024-10-22_06-53-44-PM.jpg',
                description: 'Samba OG Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1030,
                publicId: 'admin',
                id: 1026
              },
              {
                url: 'https://localhost:7000/ProductImages/1030_2024-10-22_06-53-44-PM.avif',
                description: 'Samba OG Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1030,
                publicId: 'admin',
                id: 1027
              }
            ],
            image: null,
            rating: 3.8,
            priceBeforeDiscount: 200,
            quantity: 10,
            sold: 200,
            view: 300,
            id: 1030
          },
          productId: 1030,
          publicId: 'admin',
          id: 1028
        }
      ],
      categoryId: 1007,
      brandId: 1006,
      rating: 3.8,
      priceBeforeDiscount: 200,
      quantity: 10,
      sold: 200,
      view: 300,
      photoDescription: null
    },
    {
      id: 1035,
      name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
      description:
        '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
      price: 170,
      imagePhotos: null,
      images: [
        {
          url: 'https://localhost:7000/ProductImages/1035_2024-10-23_04-00-04-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1035_2024-10-23_04-00-04-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1035,
                publicId: 'admin',
                id: 1041
              },
              {
                url: 'https://localhost:7000/ProductImages/1035_2024-10-23_04-00-04-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1035,
                publicId: 'admin',
                id: 1042
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1035
          },
          productId: 1035,
          publicId: 'admin',
          id: 1040
        },
        {
          url: 'https://localhost:7000/ProductImages/1035_2024-10-23_04-00-04-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1035_2024-10-23_04-00-04-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1035,
                publicId: 'admin',
                id: 1040
              },
              {
                url: 'https://localhost:7000/ProductImages/1035_2024-10-23_04-00-04-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1035,
                publicId: 'admin',
                id: 1042
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1035
          },
          productId: 1035,
          publicId: 'admin',
          id: 1041
        },
        {
          url: 'https://localhost:7000/ProductImages/1035_2024-10-23_04-00-04-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1035_2024-10-23_04-00-04-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1035,
                publicId: 'admin',
                id: 1040
              },
              {
                url: 'https://localhost:7000/ProductImages/1035_2024-10-23_04-00-04-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1035,
                publicId: 'admin',
                id: 1041
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1035
          },
          productId: 1035,
          publicId: 'admin',
          id: 1042
        }
      ],
      categoryId: 1009,
      brandId: 1006,
      rating: 2.6,
      priceBeforeDiscount: 180,
      quantity: 80,
      sold: 5000,
      view: 15000,
      photoDescription: null
    },
    {
      id: 1036,
      name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
      description:
        '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
      price: 170,
      imagePhotos: null,
      images: [
        {
          url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1044
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1045
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1046
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1047
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1048
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1049
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1050
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1036
          },
          productId: 1036,
          publicId: 'admin',
          id: 1043
        },
        {
          url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1043
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1045
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1046
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1047
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1048
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1049
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1050
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1036
          },
          productId: 1036,
          publicId: 'admin',
          id: 1044
        },
        {
          url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1043
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1044
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1046
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1047
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1048
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1049
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1050
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1036
          },
          productId: 1036,
          publicId: 'admin',
          id: 1045
        },
        {
          url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1043
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1044
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1045
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1047
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1048
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1049
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1050
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1036
          },
          productId: 1036,
          publicId: 'admin',
          id: 1046
        },
        {
          url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1043
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1044
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1045
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1046
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1048
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1049
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1050
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1036
          },
          productId: 1036,
          publicId: 'admin',
          id: 1047
        },
        {
          url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1043
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1044
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1045
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1046
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1047
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1049
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1050
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1036
          },
          productId: 1036,
          publicId: 'admin',
          id: 1048
        },
        {
          url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1043
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1044
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1045
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1046
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1047
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1048
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1050
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1036
          },
          productId: 1036,
          publicId: 'admin',
          id: 1049
        },
        {
          url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1043
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1044
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1045
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1046
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1047
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1048
              },
              {
                url: 'https://localhost:7000/ProductImages/1036_2024-10-23_08-44-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1036,
                publicId: 'admin',
                id: 1049
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1036
          },
          productId: 1036,
          publicId: 'admin',
          id: 1050
        }
      ],
      categoryId: 1009,
      brandId: 1006,
      rating: 2.6,
      priceBeforeDiscount: 180,
      quantity: 80,
      sold: 5000,
      view: 15000,
      photoDescription: null
    },
    {
      id: 1037,
      name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
      description:
        '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
      price: 170,
      imagePhotos: null,
      images: [
        {
          url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1052
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1053
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1054
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1055
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1056
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1057
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1058
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1037
          },
          productId: 1037,
          publicId: 'admin',
          id: 1051
        },
        {
          url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1051
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1053
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1054
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1055
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1056
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1057
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1058
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1037
          },
          productId: 1037,
          publicId: 'admin',
          id: 1052
        },
        {
          url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1051
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1052
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1054
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1055
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1056
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1057
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1058
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1037
          },
          productId: 1037,
          publicId: 'admin',
          id: 1053
        },
        {
          url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1051
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1052
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1053
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1055
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1056
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1057
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1058
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1037
          },
          productId: 1037,
          publicId: 'admin',
          id: 1054
        },
        {
          url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1051
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1052
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1053
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1054
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1056
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1057
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1058
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1037
          },
          productId: 1037,
          publicId: 'admin',
          id: 1055
        },
        {
          url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1051
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1052
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1053
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1054
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1055
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1057
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1058
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1037
          },
          productId: 1037,
          publicId: 'admin',
          id: 1056
        },
        {
          url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1051
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1052
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1053
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1054
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1055
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1056
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1058
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1037
          },
          productId: 1037,
          publicId: 'admin',
          id: 1057
        },
        {
          url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1051
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1052
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1053
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1054
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1055
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1056
              },
              {
                url: 'https://localhost:7000/ProductImages/1037_2024-10-23_08-45-47-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1037,
                publicId: 'admin',
                id: 1057
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1037
          },
          productId: 1037,
          publicId: 'admin',
          id: 1058
        }
      ],
      categoryId: 1009,
      brandId: 1006,
      rating: 2.6,
      priceBeforeDiscount: 180,
      quantity: 80,
      sold: 5000,
      view: 15000,
      photoDescription: null
    },
    {
      id: 1038,
      name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
      description:
        '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
      price: 170,
      imagePhotos: null,
      images: [
        {
          url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1060
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1061
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1062
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1063
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1064
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1065
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1038
          },
          productId: 1038,
          publicId: 'admin',
          id: 1059
        },
        {
          url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1059
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1061
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1062
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1063
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1064
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1065
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1038
          },
          productId: 1038,
          publicId: 'admin',
          id: 1060
        },
        {
          url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1059
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1060
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1062
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1063
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1064
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1065
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1038
          },
          productId: 1038,
          publicId: 'admin',
          id: 1061
        },
        {
          url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1059
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1060
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1061
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1063
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1064
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1065
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1038
          },
          productId: 1038,
          publicId: 'admin',
          id: 1062
        },
        {
          url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1059
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1060
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1061
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1062
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1064
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1065
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1038
          },
          productId: 1038,
          publicId: 'admin',
          id: 1063
        },
        {
          url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1059
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1060
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1061
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1062
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1063
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1065
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1038
          },
          productId: 1038,
          publicId: 'admin',
          id: 1064
        },
        {
          url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
          description: 'Ultraboost Light Shoes',
          dateAdded: '0001-01-01T00:00:00',
          isMain: false,
          product: {
            name: 'Ultraboost Light Shoes EPIC ENERGY. LIGHTEST EVER. Experience epic energy with the new Ultraboost Light, our lightest Ultraboost ever. The magic lies in the Light BOOST midsole, a new generation of adidas BOOST. Its unique molecule design achieves the lightest BOOST foam to date. With hundreds of BOOST capsules bursting with energy and ultimate cushioning and comfort, some feet really can have it all.',
            price: 170,
            description:
              '<div class="bullets___3bsSs" data-auto-id="specifications-section"><ul class="gl-list"><li class="gl-vspace-bpall-small">Regular fit</li><li class="gl-vspace-bpall-small">Lace closure</li><li class="gl-vspace-bpall-small">adidas PRIMEKNIT+ textile upper</li><li class="gl-vspace-bpall-small">Textile lining</li><li class="gl-vspace-bpall-small">Linear Energy Push system</li><li class="gl-vspace-bpall-small">Light BOOST</li></ul><ul class="gl-list"><li class="gl-vspace-bpall-small">Weight: 262 g (size U.K. 5.5)</li><li class="gl-vspace-bpall-small">Midsole drop: 10 mm (heel: 30 mm, forefoot: 20 mm)</li><li class="gl-vspace-bpall-small">Continental™ Better Rubber outsole</li><li class="gl-vspace-bpall-small">Yarn in upper contains at least 50% Parley Ocean Plastic and 50% recycled polyester / Minimum 10% less emissions per pair when compared to a previous version</li><li class="gl-vspace-bpall-small">Product colour: Core Black / Core Black / Crystal White</li><li class="gl-vspace-bpall-small">Product code: GY9353</li></ul></div>',
            categoryId: 1009,
            category: {
              name: 'Running',
              id: 1009
            },
            brandId: 1006,
            brand: {
              name: 'Adidas',
              id: 1006
            },
            images: [
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1059
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1060
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1061
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1062
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.jpg',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1063
              },
              {
                url: 'https://localhost:7000/ProductImages/1038_2024-10-23_08-48-50-PM.png',
                description: 'Ultraboost Light Shoes',
                dateAdded: '0001-01-01T00:00:00',
                isMain: false,
                productId: 1038,
                publicId: 'admin',
                id: 1064
              }
            ],
            image: null,
            rating: 2.6,
            priceBeforeDiscount: 180,
            quantity: 80,
            sold: 5000,
            view: 15000,
            id: 1038
          },
          productId: 1038,
          publicId: 'admin',
          id: 1065
        }
      ],
      categoryId: 1009,
      brandId: 1006,
      rating: 2.6,
      priceBeforeDiscount: 180,
      quantity: 80,
      sold: 5000,
      view: 15000,
      photoDescription: null
    }
  ]
}

const brandsResponse = [
  {
    name: 'Nike',
    id: 1
  },
  {
    name: 'Adidas',
    id: 1006
  },
  {
    name: 'New Balance',
    id: 1008
  }
]

const categoriesResponse = [
  {
    name: 'Lifestyle',
    id: 1007
  },
  {
    name: 'Running',
    id: 1009
  },
  {
    name: 'Training & Gym',
    id: 1012
  }
]
const productDetailResponse = {
  id: 1033,
  name: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
  description:
    'Product Details Features ABZORB midsole absorbs impact through a combination of cushioning and compression resistance   311 grams (11 oz) Material Durable synthetic material Style #: MR530GA',
  price: 100,
  imagePhotos: null,
  images: [
    {
      url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
      description: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
      dateAdded: '0001-01-01T00:00:00',
      isMain: false,
      product: {
        name: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
        price: 100,
        description:
          'Product Details Features ABZORB midsole absorbs impact through a combination of cushioning and compression resistance   311 grams (11 oz) Material Durable synthetic material Style #: MR530GA',
        categoryId: 1012,
        category: {
          name: 'Training & Gym',
          id: 1012
        },
        brandId: 1008,
        brand: {
          name: 'New Balance',
          id: 1008
        },
        images: [
          {
            url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
            description:
              'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
            dateAdded: '0001-01-01T00:00:00',
            isMain: false,
            productId: 1033,
            publicId: 'admin',
            id: 1035
          },
          {
            url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
            description:
              'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
            dateAdded: '0001-01-01T00:00:00',
            isMain: false,
            productId: 1033,
            publicId: 'admin',
            id: 1036
          }
        ],
        image: null,
        rating: 2.5,
        priceBeforeDiscount: 190,
        quantity: 12,
        sold: 190,
        view: 4000,
        id: 1033
      },
      productId: 1033,
      publicId: 'admin',
      id: 1034
    },
    {
      url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
      description: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
      dateAdded: '0001-01-01T00:00:00',
      isMain: false,
      product: {
        name: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
        price: 100,
        description:
          'Product Details Features ABZORB midsole absorbs impact through a combination of cushioning and compression resistance   311 grams (11 oz) Material Durable synthetic material Style #: MR530GA',
        categoryId: 1012,
        category: {
          name: 'Training & Gym',
          id: 1012
        },
        brandId: 1008,
        brand: {
          name: 'New Balance',
          id: 1008
        },
        images: [
          {
            url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
            description:
              'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
            dateAdded: '0001-01-01T00:00:00',
            isMain: false,
            productId: 1033,
            publicId: 'admin',
            id: 1034
          },
          {
            url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
            description:
              'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
            dateAdded: '0001-01-01T00:00:00',
            isMain: false,
            productId: 1033,
            publicId: 'admin',
            id: 1036
          }
        ],
        image: null,
        rating: 2.5,
        priceBeforeDiscount: 190,
        quantity: 12,
        sold: 190,
        view: 4000,
        id: 1033
      },
      productId: 1033,
      publicId: 'admin',
      id: 1035
    },
    {
      url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
      description: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
      dateAdded: '0001-01-01T00:00:00',
      isMain: false,
      product: {
        name: 'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
        price: 100,
        description:
          'Product Details Features ABZORB midsole absorbs impact through a combination of cushioning and compression resistance   311 grams (11 oz) Material Durable synthetic material Style #: MR530GA',
        categoryId: 1012,
        category: {
          name: 'Training & Gym',
          id: 1012
        },
        brandId: 1008,
        brand: {
          name: 'New Balance',
          id: 1008
        },
        images: [
          {
            url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
            description:
              'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
            dateAdded: '0001-01-01T00:00:00',
            isMain: false,
            productId: 1033,
            publicId: 'admin',
            id: 1034
          },
          {
            url: 'https://localhost:7000/ProductImages/1033_2024-10-23_03-27-40-PM.jpg',
            description:
              'A versatile running shoe that takes a performance look and gives it a stylish lifestyle twist.',
            dateAdded: '0001-01-01T00:00:00',
            isMain: false,
            productId: 1033,
            publicId: 'admin',
            id: 1035
          }
        ],
        image: null,
        rating: 2.5,
        priceBeforeDiscount: 190,
        quantity: 12,
        sold: 190,
        view: 4000,
        id: 1033
      },
      productId: 1033,
      publicId: 'admin',
      id: 1036
    }
  ],
  categoryId: 1012,
  brandId: 1008,
  rating: 2.5,
  priceBeforeDiscount: 190,
  quantity: 12,
  sold: 190,
  view: 4000,
  photoDescription: null
}

export const productMock = [
  http.get(`${config.baseUrlGateway}/product`, () => {
    return HttpResponse.json({ data: productResponse })
  }),
  http.get(`${config.baseUrlGateway}/product/brands`, () => {
    return HttpResponse.json({ data: brandsResponse })
  }),

  http.get(`${config.baseUrlGateway}/product/categories`, () => {
    return HttpResponse.json({ data: categoriesResponse })
  }),
  http.get(`${config.baseUrlGateway}/product/:id`, () => {
    return HttpResponse.json({ data: productDetailResponse })
  })
]
