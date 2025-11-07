import { useProductApi } from '../context/ProductApiContext'

export default function ProductList() {
  const {productApi} = useProductApi()
  console.log(productApi)
  get_data(productApi)

  return (
    <div>
    asdf
  </div>
  )
}

// {products.map(product => {
//   <div>
//     <p>{product.title}</p>
//   </div>
// })}    

async function get_data(productApi) {
  const data = await productApi.products()
  console.log(data)
  return data
}