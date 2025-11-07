export default class ProductService {
  constructor(apiClient) {
    this.apiClient = apiClient
  }

  async products(queryFilter) {
    const res = await this.apiClient.products({params : queryFilter})
    return res.data
  }

  async categories() {
    const res = await this.apiClient.categories("categories")
    return res.data
  }

  async tags() {
    const res = await this.apiClient.tags("tags")
    return res.data
  }
}