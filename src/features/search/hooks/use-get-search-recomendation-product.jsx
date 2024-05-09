import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../../../context/user-auth-context";

const useSearchGetRecomendationProduct = () => {
  const [searchRecomendationProduct, setSearchRecomendationProduct] = useState(null);
  const { user } = useAuth();
  const { history_search } = user || {};

  const getSearchRecomendationProduct = useCallback(async () => {
    if (!user || !history_search) {
      return setSearchRecomendationProduct([
        {
          title: "webcams",
          to: "webcams",
        },
        {
          title: "makanan jadi",
          to: "makananjadi",
        },
        {
          title: "hp gaming",
          to: "hpgaming",
        },
        {
          title: "make up wajah",
          to: "makeupwajah",
        },
      ]);
    } else {
      setSearchRecomendationProduct(
        history_search?.slice(0, history_search.length - 1).map((item) => ({
          title: item.title,
          to: item.title,
        }))
      );
    }
  }, [user, history_search]);

  useEffect(() => {
    getSearchRecomendationProduct();
  }, [getSearchRecomendationProduct]);

  return [searchRecomendationProduct];
};

export default useSearchGetRecomendationProduct;
