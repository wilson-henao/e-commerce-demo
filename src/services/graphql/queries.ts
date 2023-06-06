import { gql } from '@apollo/client'

// TODO: Only bring published collections and products in stock
export const PRODUCT_DETAILS_FRAGMENT = gql`
  fragment ProductDetails on Product {
    id
    title
    description
    featuredImage {
      id
      url
    }
    variants(first: 1) {
      edges {
        node {
          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
`

export const ALL_PRODUCTS = gql`
  query Products($numProducts: Int!, $cursor: String) {
    products(first: $numProducts, after: $cursor) {
      edges {
        cursor
        node {
          ...ProductDetails
        }
      }
      pageInfo {
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${PRODUCT_DETAILS_FRAGMENT}
`

export const FEATURED_PRODUCTS = gql`
  query featuredProducts($numProducts: Int!) {
    collections(first: 1, query: "title:Featured") {
      edges {
        node {
          id
          title
          products(first: $numProducts) {
            edges {
              node {
                ...ProductDetails
              }
            }
          }
        }
      }
    }
  }
  ${PRODUCT_DETAILS_FRAGMENT}
`

export const SEARCH_PRODUCTS = gql`
  query searchProducts($search: String!) {
    products(first: 3, query: $search) {
      edges {
        node {
          ...ProductDetails
        }
      }
    }
  }
  ${PRODUCT_DETAILS_FRAGMENT}
`
