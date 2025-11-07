import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import { ProductApiProvider } from './context/ProductApiContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryclient = new QueryClient()

function App() {

  return (
    <ProductApiProvider>
      <QueryClientProvider client={queryclient}>
        <ProductList />
      </QueryClientProvider>
    </ProductApiProvider>
  )
}

export default App
