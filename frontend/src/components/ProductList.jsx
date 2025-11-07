import ProductClient from '../api/productsClient'
import ProductService from '../api/productService'


const productService = new ProductService(new ProductClient())

export default async function ProductList() {

  get_data()

  return <div>
    {products.map(product => {
      <div>
        <p>{product.title}</p>
      </div>
    })}    
  </div>
}


async function get_data() {
  const data = await productService.products()
  console.log(data)
  return data
}