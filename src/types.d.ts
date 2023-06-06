export interface Collection {
  node: {
    id: string
    title: string
  }
}

export interface Product {
  node: {
    id: string
    title: string
    description: string
    featuredImage: {
      url: string
    }
    variants: {
      edges: Array<{
        node: {
          price: {
            amount: string
            currencyCode: string
          }
        }
      }>
    }
  }
}
