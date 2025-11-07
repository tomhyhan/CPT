import axios from "axios";

export default class ProductClient {
  constructor() {
    // Creating instance of axios with base url
    this.httpClient = axios.create({
      baseURL: "http://localhost:8000/api"
    })
  }

  async products(params) {
    // Get: /api/products/
    return this.httpClient.get("products", params)
  }
} 