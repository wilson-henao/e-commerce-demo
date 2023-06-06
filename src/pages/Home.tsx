import { useState } from 'react'
import { Spinner, Typography } from '@material-tailwind/react'
import CustomPagination from '../components/UI/Pagination/CustomPagination'
import ListProducts from '../components/List/ListProducts'
import { useProducts } from '../hooks/useProducts'
import { Product } from '../types'

// TODO: Add placeholder/skeleton when products are loading
export default function Home () {
  const [previousPage, setPreviousPage] = useState<string>('')
  const [nextPage, setNextPage] = useState<string>('')
  const [products, setProducts] = useState<Product[]>([])
  const { loading, error, data, fetchMore } = useProducts({})

  const handlePage = (type: string) => {
    if (type === 'next') {
      if (nextPage === '' || (data.products.edges.at(-1).cursor === nextPage && data.products.pageInfo.hasNextPage === true)) {
        fetchMore({
          variables: { cursor: data.products.pageInfo.endCursor },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            const previousEdges = previousResult.products.edges
            const newEdges = fetchMoreResult.products.edges
            const newPageInfo = fetchMoreResult.products.pageInfo

            setPreviousPage(previousEdges.at(-1).cursor)
            setNextPage(newPageInfo.endCursor)
            setProducts([...newEdges])

            return {
              products: {
                edges: [...previousEdges, ...newEdges],
                pageInfo: { ...newPageInfo }
              }
            }
          }
        })
      } else {
        const index: number = data.products.edges.findIndex(product => product.cursor === previousPage)
        const validIndex = index + 6 > data.products.edges.length ? data.products.edges.length : index + 6

        setProducts([...data.products.edges.slice(index + 5, index - 1)])
        setNextPage(data.products.edges[validIndex].cursor)
        setPreviousPage(nextPage)
      }
      // refetch({ cursor: data.products.pageInfo.endCursor })
    } else if (type === 'previous') {
      const index: number = data.products.edges.findIndex(product => product.cursor === previousPage)
      const validIndex = index - 6 < 0 ? 0 : index - 6
      setProducts([...data.products.edges.slice(index - 5, index + 1)])
      setPreviousPage(data.products.edges[validIndex].cursor)
      setNextPage(previousPage)
    } else {
      console.error('Functionality not valid')
    }
  }

  return (error != null)
    ? (
      <div className='container mx-auto p-4'>
        <Typography variant='h1' className='my-2'>
          An error has occurred, please reload the page.
        </Typography>
      </div>
      )
    : (
      <div className='mx-auto w-full max-w-screen-xl px-4 py-12'>
        {loading
          ? (
            <Spinner className='w-full' color='green' />
            )
          : (
            <>
              <CustomPagination handlePage={handlePage} next={nextPage !== data.products.edges.at(-1).cursor || data.products.pageInfo.hasNextPage} previous={previousPage !== '' && previousPage !== data.products.edges[0].cursor} />
              <ListProducts products={products.length > 0 ? products : data.products.edges} />
              <CustomPagination handlePage={handlePage} next={nextPage !== data.products.edges.at(-1).cursor || data.products.pageInfo.hasNextPage} previous={previousPage !== '' && previousPage !== data.products.edges[0].cursor} />
            </>
            )}
      </div>
      )
}
