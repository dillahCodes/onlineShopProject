import "./tailwind-in.css";
import { StyleProvider } from "@ant-design/cssinjs";
import ThemeProvider from "./context/thame-provider";
import { AuthProvider } from "./context/user-auth-context";
import { SearchBarProvider } from "./context/search-bar-context";
import AppRouter from "./routers/browser-routers";
import { BrowserRouter } from "react-router-dom";
import { ShippingToProvider } from "./context/address-shipping-to-context";
import { AddressProvider } from "./components/page-user-account-set-address-components/context/add-address-context";
import { SellerOverlayProvider } from "./dashboard-seller/context/seller-overlay-context";
import { SellerAddProductValueDataProvider } from "./dashboard-seller/context/seller-add-product-value-data-context";

function App() {
  return (
    <StyleProvider hashPriority="high">
      <BrowserRouter>
        <SellerAddProductValueDataProvider>
          <AuthProvider>
            <ThemeProvider>
              <ShippingToProvider>
                <SearchBarProvider>
                  <AddressProvider>
                    <SellerOverlayProvider>
                      <AppRouter />
                    </SellerOverlayProvider>
                  </AddressProvider>
                </SearchBarProvider>
              </ShippingToProvider>
            </ThemeProvider>
          </AuthProvider>
        </SellerAddProductValueDataProvider>
      </BrowserRouter>
    </StyleProvider>
  );
}

export default App;
