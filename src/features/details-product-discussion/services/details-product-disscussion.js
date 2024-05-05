import instance_axios from "../../../utils/axios/axios-instace-and-interceptors";

const detailsProductDiscussion = {
  getProductDiscussionWithProductId: (productId) => instance_axios.get(`products/${productId}/discus`),
  addDiscussion: (productId, userId, data) => instance_axios.post(`products/${productId}/discus/${userId}`, data),
  replyDiscussion: (discusId, userId, data) => instance_axios.post(`products/${discusId}/discus/${userId}/reply`, data),
  deleteDiscussion: (disscusId) => instance_axios.delete(`products/discus/${disscusId}/delete`),
};

export default detailsProductDiscussion;
