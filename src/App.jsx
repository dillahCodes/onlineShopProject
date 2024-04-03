import { RouterProvider } from "react-router-dom";
import "./tailwind-in.css";
import routers from "./routers/browser-routers";
import ThemeProvider from "./context/theme/thame-provider";
import { StyleProvider } from "@ant-design/cssinjs";
import { SearchBarProvider } from "./context/search-bar-context/search-bar-context";
import { AuthProvider } from "./context/auth/user-auth-context";

function App() {
  return (
    <StyleProvider hashPriority="high">
      <ThemeProvider>
        <AuthProvider>
          <SearchBarProvider>
            <RouterProvider router={routers} />
          </SearchBarProvider>
        </AuthProvider>
      </ThemeProvider>
    </StyleProvider>
  );
}

export default App;
