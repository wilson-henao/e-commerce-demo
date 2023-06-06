import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from '@material-tailwind/react'
import { Product } from '../../../types'

interface Props {
  data: Product
}

// TODO: Add to Cart button functionality.
export default function CustomCard ({ data }: Props) {
  return (
    <Card className='w-80'>
      <CardHeader shadow={false} floated={false} className='h-80'>
        <img
          src={data.node.featuredImage.url}
          className='w-full h-full object-cover'
          alt='featured image'
        />
      </CardHeader>
      <CardBody>
        <div className='flex items-center justify-between mb-2'>
          <Typography color='blue-gray' className='font-medium'>
            {data.node.title}
          </Typography>
          <Typography color='blue-gray' className='font-medium'>
            {data.node.variants.edges[0].node.price.currencyCode} {data.node.variants.edges[0].node.price.amount}
          </Typography>
        </div>
        <Typography
          variant='small'
          color='gray'
          className='font-normal opacity-75'
        >
          {data.node.description.slice(0, 100)}
        </Typography>
      </CardBody>
      <CardFooter className='pt-0'>
        <Button
          ripple={false}
          fullWidth
          className='bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100'
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
