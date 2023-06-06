/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import {
  Navbar,
  Typography,
  Collapse,
  IconButton,
  Spinner
} from '@material-tailwind/react'
import { useLazyQuery } from '@apollo/client'
import ListCollections from '../List/ListCollections'
import { Collection } from '../../types'
import SearchBar from '../SearchBar/SearchBar'
import { SEARCH_PRODUCTS, FEATURED_PRODUCTS } from '../../services/graphql/queries'

interface Props {
  collections: Collection[]
  loading: boolean
}

export default function Header ({ collections, loading }: Props) {
  const [getProduct, productResults] = useLazyQuery(SEARCH_PRODUCTS)
  const [getFeaturedProducts, featuredProductResults] = useLazyQuery(FEATURED_PRODUCTS)
  const [openNav, setOpenNav] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    getFeaturedProducts({ variables: { numProducts: 3 } })
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault()
    const value = ev.target.value.trim()
    setSearchValue(value)
    value.length >= 3 &&
      getProduct({ variables: { search: value } })
  }

  return (
    <Navbar className='sticky mx-auto max-w-screen-xl px-4 py-3 mt-2 z-10'>
      <div className='flex flex-wrap items-center justify-between gap-y-4 text-blue-gray-900'>
        <Typography
          as='a'
          href='/'
          variant='h6'
          className='mr-4 ml-2 cursor-pointer py-1.5'
        >
          Clothing Store
        </Typography>
        <div className='relative flex gap-2 w-4/5 ssm:w-min md:hidden'>
          <SearchBar
            featuredProducts={featuredProductResults.data?.collections?.edges[0].node.products.edges}
            products={productResults.data?.products?.edges}
            handleChange={handleChange}
            searchValue={searchValue}
          />
        </div>
        <div className='flex items-center gap-4'>
          <div className='mr-4 hidden md:block'>
            {loading
              ? (
                <Spinner className='w-full' color='green' />
                )
              : (
                <ListCollections collections={collections} />
                )}
          </div>
          <div className='relative hidden gap-2 md:w-min md:flex'>
            <SearchBar
              featuredProducts={featuredProductResults.data?.collections?.edges[0].node.products.edges}
              products={productResults.data?.products?.edges}
              handleChange={handleChange}
              searchValue={searchValue}
            />
          </div>
          <IconButton
            variant='text'
            className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden'
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav
              ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
                )
              : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {loading
          ? (
            <Spinner color='green' />
            )
          : (
            <ListCollections collections={collections} />
            )}
      </Collapse>
    </Navbar>
  )
}
