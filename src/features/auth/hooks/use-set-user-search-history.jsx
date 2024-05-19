import { useCallback, useRef } from "react";
import { useAuth } from "../../../context/user-auth-context";
import authServices from "../services/auth-services";
import { useEffect } from "react";
import { mutate } from "swr";

const history_data = (res) => {
  return {
    category: res.data.data.category,
    title: res.data.data.title,
    history_id: res.data.data.history_id,
  };
};

const mutateCacheData = (user, res) => {
  return mutate(`/api/user/${user.user_id}`, {
    optimisticData: {
      ...user,
      history_search: [...user.history_search, history_data(res)],
    },
    rollbackOnError: true,
    populateCache: true,
    revalidate: false,
  });
};

const useSetUserSearchHistory = (currentProduct) => {
  const { user } = useAuth();
  const { user_id } = user || {};
  const { history_search } = user || {};
  const renderCount = useRef(0);
  const maxHistoryLength = 3;

  const setHistory = useCallback(async () => {
    if (!currentProduct || !user || !user_id || !history_search || renderCount.current === 0) return;
    const payload = {
      title: currentProduct.name,
      category: currentProduct.category,
    };
    const isDataExists =
      history_search?.filter((data) => data.title === payload.title && data.category === payload.category).length > 0;

    if (isDataExists) return;

    try {
      if (!isDataExists && history_search.length < maxHistoryLength) {
        const res = await authServices.setUserSearchHistory(user_id, payload);
        mutateCacheData(user, res);
      }

      if (history_search.length >= maxHistoryLength) {
        await authServices.deleteUserSearchHistory(history_search.shift().history_id).then(async () => {
          if (history_search.length < maxHistoryLength) {
            const res = await authServices.setUserSearchHistory(user_id, payload);
            mutateCacheData(user, res);
          }
        });
      }
    } catch (error) {
      console.error(error);
    }
  }, [currentProduct, user, history_search, user_id]);

  // run only once
  useEffect(() => {
    renderCount.current > 0 && currentProduct && setHistory();

    return () => (renderCount.current += 1);
  }, [currentProduct, setHistory]);
};

export default useSetUserSearchHistory;
