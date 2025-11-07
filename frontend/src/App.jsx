import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList'
import { ProductApiProvider } from './context/ProductApiContext'

function App() {

  return (
    <ProductApiProvider>
      <ProductList />
    </ProductApiProvider>
  )
}

export default App
