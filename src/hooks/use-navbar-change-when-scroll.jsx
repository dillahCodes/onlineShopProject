import { useEffect, useState } from "react";

const useNavbarChangeWhenScroll = (initialTrigger) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const changeNavVisibility = () => {
      const initialPosition = initialTrigger;
      Math.round(window.scrollY) > initialPosition ? setIsShow(true) : setIsShow(false);
    };
    window.addEventListener("scroll", changeNavVisibility);
    return () => {
      window.removeEventListener("scroll", changeNavVisibility);
    };
  }, [initialTrigger]);

  return [isShow];
};

export default useNavbarChangeWhenScroll;
