import { useAuth } from "../../../context/user-auth-context";
import { mutate } from "swr";
import detailsProductDiscussion from "../services/details-product-disscussion";

const useAddProductDiscussion = () => {
  const { user } = useAuth();

  const addProductDiscussion = async (discussMessage, discussCategory, productId) => {
    const { user_id } = user;
    if (!discussMessage || !discussCategory || !productId || !user) return;
    try {
      const data = {
        message: discussMessage,
        discusType: [
          {
            name: discussCategory,
          },
        ],
      };
      await detailsProductDiscussion.addDiscussion(productId, user_id, data);

      // after add discussion, we update data using mutate and be sure key and variable value product discussion is matched in hooks useGetProductDiscussion
      mutate(["product-discussion", productId]);
    } catch (error) {
      console.error("Error adding product discussion:", error);
    }
  };

  return {
    addProductDiscussion,
  };
};

export default useAddProductDiscussion;
