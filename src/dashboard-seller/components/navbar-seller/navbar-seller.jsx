import NavbarSellerAppComponent from "./navbar-seller-app-component";
import NavbarSellerIconComponent from "./navbar-seller-icon-component";
import NavbarSellerInfoProfileComponent from "./navbar-seller-info-profile-component";
import NavbarSellerInputComponent from "./navbar-seller-input-component";

const NavbarSeller = () => {
  return (
    <header className="w-full  bg-white ">
      {/* tokopedia seller app */}
      <NavbarSellerAppComponent />

      {/* tokopedia seller navbar */}
      <div className="w-full border-t justify-between gap-x-5 px-5  flex items-center  py-2">
        <NavbarSellerIconComponent />
        <NavbarSellerInputComponent />
        <NavbarSellerInfoProfileComponent />
      </div>
    </header>
  );
};

export default NavbarSeller;
