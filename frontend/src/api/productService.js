export default class ProductService {
  constructor(apiClient) {
    this.apiClient = apiClient
  }

  async products(filter) {
    const params = {...filter}
    if (params.category?.id) params.category = params.category.id

    const res = await this.apiClient.products({params:params})
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