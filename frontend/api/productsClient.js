import axios from "axios";

export default class ProductClient {
  constructor() {
    // Creating instance of axios with base url
    this.httpClient = axios.create({
      baseURL: "http://localhost:8000"
    })
  }

  async filter(params) {
    return this.httpClient.get("api/products/", params)
  }
} 