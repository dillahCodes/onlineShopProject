import { useCallback, useRef } from "react";
import { useAuth } from "../../../context/user-auth-context";
import authServices from "../services/auth-services";
import { useEffect } from "react";

const useSetUserSearchHistory = (currentProduct) => {
  const { user, setUser } = useAuth();
  const renderCount = useRef(0); // renderCount for componentDidMount and componentDidUpdate

  const setHistory = useCallback(async () => {
    if (!currentProduct || !user || renderCount.current === 0) return;

    const payload = {
      title: currentProduct.name,
      category: currentProduct.category,
    };

    const { history_search } = user;
    const { user_id } = user;
    const maxHistoryLength = 5;

    const isDataExists =
      history_search.filter((data) => data.title === payload.title && data.category === payload.category).length > 0;

    if (isDataExists) return;

    try {
      if (history_search.length < maxHistoryLength) {
        await authServices.setUserSearchHistory(user_id, payload);
      }

      if (history_search.length === maxHistoryLength || history_search.length > maxHistoryLength) {
        await authServices.deleteUserSearchHistory(history_search.shift().history_id).then(async () => {
          if (history_search.length < maxHistoryLength) await authServices.setUserSearchHistory(user.user_id, payload);
        });
      }

      // add hisotry (local)
      setUser((prevUser) => ({
        ...prevUser,
        history_search: [...prevUser.history_search, payload],
      }));
    } catch (error) {
      console.error(error);
    }
  }, [currentProduct, user, setUser]);

  // run only once
  useEffect(() => {
    renderCount.current > 0 && currentProduct && setHistory();

    return () => (renderCount.current += 1);
  }, [currentProduct]);
};

export default useSetUserSearchHistory;
