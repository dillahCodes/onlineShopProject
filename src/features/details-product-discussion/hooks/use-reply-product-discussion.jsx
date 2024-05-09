import { mutate } from "swr";
import { useAuth } from "../../../context/user-auth-context";
import detailsProductDiscussion from "../services/details-product-disscussion";

const useReplyProductDiscussion = () => {
  const { user } = useAuth();

  //   fetcher
  const replyProductDiscussion = async (discussId, productId, message) => {
    if (!discussId || !message || !productId || !user) return;
    try {
      await detailsProductDiscussion.replyDiscussion(discussId, user.user_id, message);
      mutate(["product-discussion", productId]); // after add discussion, we update data using mutate and be sure key and variable value product discussion is matched in hooks useGetProductDiscussion
    } catch (error) {
      console.error("Error during reply product discussion:", error);
    }
  };

  return {
    replyProductDiscussion,
  };
};

export default useReplyProductDiscussion;
