import { createContext, useContext } from 'react'
import ProductClient from '../api/productsClient'
import ProductService from '../api/productService'

const ProductContext = createContext()
// single instance of product api service
const client = new ProductClient()
const productApi = new ProductService(client)

// make productApi available anywhere in the app
export function ProductApiProvider({children}) {
  return (
    <ProductContext value={{ productApi }}>
      {children}
    </ProductContext>
  )
}
export function useProductApi() {
  return useContext(ProductContext)
} 