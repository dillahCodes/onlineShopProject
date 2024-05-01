import { useEffect, useState } from "react";

const useNavbarChangeWhenScroll = (initialTrigger) => {
  const [isShow, setIsShow] = useState(false);
  const [triggerValue, setTriggerValue] = useState(0);

  useEffect(() => {
    const changeNavVisibility = () => {
      const initialPosition = initialTrigger;
      Math.round(window.scrollY) > initialPosition ? setIsShow(true) : setIsShow(false);
      setTriggerValue(Math.round(window.scrollY));
    };
    window.addEventListener("scroll", changeNavVisibility);
    return () => {
      window.removeEventListener("scroll", changeNavVisibility);
    };
  }, [initialTrigger]);

  return [isShow, triggerValue];
};

export default useNavbarChangeWhenScroll;
