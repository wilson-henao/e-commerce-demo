import { ALL_PRODUCTS } from '../services/graphql/queries'

export const ProductsMock = [
  {
    request: {
      query: ALL_PRODUCTS
    },
    result: {
      data: {
        products: {
          edges: [
            {
              node: {
                id: 1,
                title: 'Product 1',
                description: '',
                featuredImage: {
                  id: 1,
                  url: ''
                },
                variants: {
                  edges: {
                    node: {
                      price: {
                        amount: '2',
                        currencyCode: 'USD'
                      }
                    }
                  }
                }
              }
            },
            {
              node: {
                id: 2,
                title: 'Product 2',
                description: '',
                featuredImage: {
                  id: 1,
                  url: ''
                },
                variants: {
                  edges: {
                    node: {
                      price: {
                        amount: '1',
                        currencyCode: 'USD'
                      }
                    }
                  }
                }
              }
            }
          ]
        }
      }
    }
  }
]
