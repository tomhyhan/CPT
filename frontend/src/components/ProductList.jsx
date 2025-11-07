import ProductClient from '../api/productsClient'
import ProductService from '../api/productService'


const productService = new ProductService(new ProductClient())

export default function ProductList() {

  get_data()

  return <div>Hello</div>
}


async function get_data() {
  const data = await productService.products()
  console.log(data)
}