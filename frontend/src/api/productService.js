export default class ProductService {
  constructor(apiClient) {
    this.apiClient = apiClient
  }

  async products() {
    // returns products
    const res = await this.apiClient.products()
    return res.data
  }
}