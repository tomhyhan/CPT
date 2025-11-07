import { useQuery } from '@tanstack/react-query'
import { useProductApi } from '../context/ProductApiContext'
import { useState } from 'react'

export default function ProductList() {
  const {productApi} = useProductApi()
  const {filter, setFilter} = useState({
    category: null,
  })

  // These requests run in parallel 
  const productQuery = useQuery({queryKey: ["products"], queryFn: () => productApi.products()} )
  const categoryQuery = useQuery({queryKey: ["categories"], queryFn: () => productApi.categories()} )
  const tagQuery = useQuery({queryKey: ["tags"], queryFn: () => productApi.tags()} )

  if (productQuery.isLoading | categoryQuery.isLoading | tagQuery.isLoading) return <div>loading...</div>

  console.log(categoryQuery.data, tagQuery.data)

  return (
    <div>
    {productQuery.data.map(product => (
      <div>
        <p>{product.title}</p>
      </div>
  ))}    
  </div>
  )
}

