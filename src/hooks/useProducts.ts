import { useQuery } from '@apollo/client'
import { ALL_PRODUCTS } from '../services/graphql/queries'

interface Props {
  cursor?: string
}

export const useProducts = ({ cursor }: Props) => {
  const result = useQuery(ALL_PRODUCTS, { variables: { numProducts: 6, cursor } })
  return result
}
