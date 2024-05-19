import { useEffect, useState } from "react";

const useNavbarChangeWhenScroll = (initialTrigger) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const changeNavVisibility = () => {
      const scrollY = window.scrollY;

      if (scrollY > initialTrigger && !isShow) {
        setIsShow(true);
      } else if (scrollY <= initialTrigger && isShow) {
        setIsShow(false);
      }
    };

    window.addEventListener("scroll", changeNavVisibility);
    return () => {
      window.removeEventListener("scroll", changeNavVisibility);
    };
  }, [initialTrigger, isShow]);

  return [isShow];
};

export default useNavbarChangeWhenScroll;
