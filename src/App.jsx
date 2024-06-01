import "./tailwind-in.css";
import { StyleProvider } from "@ant-design/cssinjs";
import ThemeProvider from "./context/thame-provider";
import { AuthProvider } from "./context/user-auth-context";
import { SearchBarProvider } from "./context/search-bar-context";
import AppRouter from "./routers/browser-routers";
import { BrowserRouter } from "react-router-dom";
import { AddressProvider } from "./context/add-address-context";

function App() {
  return (
    <StyleProvider hashPriority="high">
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <AddressProvider>
              <SearchBarProvider>
                <AppRouter />
              </SearchBarProvider>
            </AddressProvider>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </StyleProvider>
  );
}

export default App;
