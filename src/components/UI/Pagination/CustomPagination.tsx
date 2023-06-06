import { IconButton } from '@material-tailwind/react'
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

interface Props {
  handlePage: (type: string) => void
  next: boolean
  previous: boolean
}

export default function CustomPagination ({ handlePage, next, previous }: Props) {
  return (
    <div className='flex items-center justify-end gap-8'>
      <IconButton
        size='sm'
        variant='outlined'
        color='blue-gray'
        onClick={() => handlePage('previous')}
        disabled={!previous}
      >
        <ArrowLeftIcon strokeWidth={2} className='h-4 w-4' />
      </IconButton>
      <IconButton
        size='sm'
        variant='outlined'
        color='blue-gray'
        onClick={() => handlePage('next')}
        disabled={!next}
      >
        <ArrowRightIcon strokeWidth={2} className='h-4 w-4' />
      </IconButton>
    </div>
  )
}
