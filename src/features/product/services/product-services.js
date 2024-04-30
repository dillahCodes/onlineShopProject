import instance_axios from "../../../utils/axios/axios-instace-and-interceptors";

const productServices = {
  getProductById: (productId) => instance_axios.get(`products/${productId}`),
  addProduct: (productData) => instance_axios.post("products", productData),
  getAllProducts: () => instance_axios.get("products"),
  getAllProductsWithLimit: (limit) => instance_axios.get(`products?limit=${limit}`),
  updateProduct: (productId, productData) =>
    instance_axios.patch(`products/${productId}`, productData),
  deleteProduct: (productId) => instance_axios.delete(`products/${productId}/delete`),
  searchProduct: (search) => instance_axios.get(`products/search?q=${search}`),
  searchProductWithLimit: (search, limit) =>
    instance_axios.get(`products/search?q=${search}&limit=${limit}`),
};

export default productServices;
