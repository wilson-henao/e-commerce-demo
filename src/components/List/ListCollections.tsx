import { Typography } from '@material-tailwind/react'
import { Collection } from '../../types'

interface Props {
  collections: Collection[]
}

export default function ListCollections ({ collections }: Props) {
  return (
    <ul className='mb-4 mt-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6'>
      {collections.map((collection) => (
        <Typography
          key={collection.node.id}
          as='li'
          variant='small'
          color='blue-gray'
          className='p-1 font-normal'
        >
          <a href='#' className='flex items-center'>
            {collection.node.title}
          </a>
        </Typography>
      ))}
    </ul>
  )
}
