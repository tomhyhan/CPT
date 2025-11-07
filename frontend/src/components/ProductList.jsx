import { useQuery } from '@tanstack/react-query'
import { useProductApi } from '../context/ProductApiContext'

export default function ProductList() {
  const {productApi} = useProductApi()

  const query = useQuery({queryKey: ["products"], queryFn: () => productApi.products()} )

  if (query.isLoading) return <div>loading...</div>
  console.log(query.data)

  return (
    <div>
    {query.data.map(product => (
      <div>
        <p>{product.title}</p>
      </div>
  ))}    
  </div>
  )
}

