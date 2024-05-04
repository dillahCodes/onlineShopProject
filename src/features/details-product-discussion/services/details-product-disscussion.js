import instance_axios from "../../../utils/axios/axios-instace-and-interceptors";

const detailsProductDiscussion = {
  getProductDiscussionWithProductId: (productId) => instance_axios.get(`products/${productId}/discus`),
  addDiscussion: (productId, userId, data) => instance_axios.post(`products/${productId}/discus/${userId}`, data),
  replyDiscussion: (productId, userId, data) =>
    instance_axios.post(`products/${productId}/discus/${userId}/reply`, data),
  deleteDiscussion: (disscusId) => instance_axios.delete(`products/discus/${disscusId}/delete`),
};

export default detailsProductDiscussion;
