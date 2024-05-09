import detailsProductDiscussion from "../services/details-product-disscussion";
import useSWR from "swr";

const useGetProductDiscussion = (productId) => {
  // Mendefinisikan fungsi untuk mendapatkan data diskusi produk
  const getProductDiscussion = async () => {
    if (!productId) return;
    const res = await detailsProductDiscussion.getProductDiscussionWithProductId(productId);
    return res.data.data;
  };

  // using SWR for update discussion data (argument 1 should be same as argument in useAddProductDiscussion hooks)
  const { data, error, isValidating } = useSWR(["product-discussion", productId], getProductDiscussion);

  // Kembalikan data, error, dan status loading
  return { data, error, isLoading: isValidating };
};

export default useGetProductDiscussion;
