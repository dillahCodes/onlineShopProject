import { useCallback, useEffect, useRef, useState } from "react";
import detailsProductDiscussion from "../services/details-product-disscussion";

const useGetProductDiscussion = (productId) => {
  const [productDiscussion, setProductDiscussion] = useState(null);
  const renderCount = useRef(0);

  const getProductDiscussion = useCallback(async () => {
    if (!productId) return;
    try {
      const res = await detailsProductDiscussion.getProductDiscussionWithProductId(productId);
      setProductDiscussion(res.data.data);
    } catch (error) {
      console.error("Error getting product discussion:", error);
    }
  }, [productId]);

  useEffect(() => {
    renderCount.current > 0 && getProductDiscussion();
    return () => (renderCount.current += 1);
  }, [getProductDiscussion]);

  return [productDiscussion];
};

export default useGetProductDiscussion;
