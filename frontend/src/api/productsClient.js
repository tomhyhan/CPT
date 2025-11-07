import axios from "axios";

export default class ProductClient {
  constructor() {
    // Creating instance of axios with base url
    this.httpClient = axios.create({
      baseURL: "http://localhost:8000/api",
      paramsSerializer: {
        // This removes brackets in tag
        indexes: null 
      },
    })
  }

  async products(params) {
    // Get: /api/products/
    return this.httpClient.get("products", params)
  }

  async categories() {
    // Get: /api/categories/
    return this.httpClient.get("categories")
  }

  async tags() {
    // Get: /api/tags/
    return this.httpClient.get("tags")
  }
} 