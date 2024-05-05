import { useAuth } from "../../../context/user-auth-context";
import detailsProductDiscussion from "../services/details-product-disscussion";

const useAddProductDiscussion = (discussMessage, discussCategory, productId) => {
  const { user } = useAuth();

  const data = {
    message: discussMessage,
    discusType: [
      {
        name: discussCategory,
      },
    ],
  };

  const addProductDiscussion = async () => {
    const { user_id } = user;
    if (!discussMessage || !discussCategory || !productId || !user) return;
    try {
      await detailsProductDiscussion.addDiscussion(productId, user_id, data);
    } catch (error) {
      console.error("Error adding product discussion:", error);
    }
  };

  return {
    addProductDiscussion,
  };
};

export default useAddProductDiscussion;