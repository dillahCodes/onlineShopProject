import { useSellerOverlay } from "../../context/seller-overlay-context";

const NavbarOverlay = () => {
  const { setIsOperlayOpen } = useSellerOverlay();

  const handleClickOutside = (e) => {
    if (e.target.id === "overlay-navbar-seller") setIsOperlayOpen(false);
  };

  return <div id="overlay-navbar-seller" onClick={handleClickOutside} className={`w-full  h-screen transition-all opacity-70  duration-300  bg-black  fixed z-[2]`} />;
};

export default NavbarOverlay;
