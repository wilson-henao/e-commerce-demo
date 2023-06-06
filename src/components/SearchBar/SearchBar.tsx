import { Input, Typography } from '@material-tailwind/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Product } from '../../types'

interface Props {
  searchValue: string
  products: Product[]
  featuredProducts: Product[]
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

export default function SearchBar ({
  featuredProducts,
  products,
  searchValue,
  handleChange
}: Props) {
  return (
    <div className='inline-flex flex-col justify-center relative text-gray-500'>
      <div className='relative'>
        <Input
          type='search'
          label='Type here...'
          className='pr-20'
          icon={<MagnifyingGlassIcon strokeWidth={2} />}
          onChange={handleChange}
        />
      </div>
      <ul className='bg-[#e9e9e9] border border-gray-100 w-full mt-2 absolute top-12 md:right-0 max-w-xs min-w-[230px] xs:min-w-[360px]'>
        {searchValue !== ''
          ? (
            <>
              {products?.length > 0
                ? (
                    products.map((product) => (
                      <li
                        key={product.node.id}
                        className='flex items-center p-3 border-b-2 border-gray-100 relative cursor-pointer hover:bg-blue-50 hover:text-gray-900'
                      >
                        <img
                          src={product.node.featuredImage.url}
                          alt='featured image'
                          width={50}
                          className='h-fit rounded-3xl'
                        />
                        <div className='flex flex-col pl-3'>
                          <p>
                            <b>{product.node.title}</b> -{' '}
                            {product.node.description.slice(0, 30)}
                          </p>
                          <Typography>
                            {product.node.variants.edges[0].node.price.currencyCode}{' '}
                            {product.node.variants.edges[0].node.price.amount}
                          </Typography>
                        </div>
                      </li>
                    ))
                  )
                : (
                  <li className='flex items-center px-3 py-4 border-b-2 border-gray-100 relative cursor-pointer hover:bg-blue-50 hover:text-gray-900'>
                    <div className='flex flex-col pl-3'>
                      <Typography>No results found</Typography>
                    </div>
                  </li>
                  )}
              <hr />
              <Typography className='text-center pt-4 pb-2'>Featured products</Typography>
              {
                featuredProducts?.length > 0 && (
                  featuredProducts.map((product) => (
                    <li
                      key={product.node.id}
                      className='flex items-center p-3 border-b-2 border-gray-100 relative cursor-pointer hover:bg-blue-50 hover:text-gray-900'
                    >
                      <img
                        src={product.node.featuredImage.url}
                        alt='featured image'
                        width={50}
                        className='h-fit rounded-3xl'
                      />
                      <div className='flex flex-col pl-3'>
                        <p>
                          <b>{product.node.title}</b> -{' '}
                          {product.node.description.slice(0, 30)}
                        </p>
                        <p>
                          {product.node.variants.edges[0].node.price.currencyCode}{' '}
                          {product.node.variants.edges[0].node.price.amount}
                        </p>
                      </div>
                    </li>
                  ))
                )
              }
            </>
            )
          : null}
      </ul>
    </div>
  )
}
