import { Product } from '../../types'
import CustomCard from '../UI/Card/CustomCard'

interface Props {
  products: Product[] | []
}

export default function ListProducts ({ products }: Props) {
  return (
    <div className='flex flex-wrap justify-center gap-8 py-5'>
      {products.map((product) => (
        <CustomCard key={product.node.id} data={product} />
      ))}
    </div>
  )
}
