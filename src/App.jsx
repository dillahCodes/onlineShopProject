import { RouterProvider } from "react-router-dom";
import "./tailwind-in.css";
import routers from "./routers/browser-routers";
import { StyleProvider } from "@ant-design/cssinjs";
import ThemeProvider from "./context/thame-provider";
import { AuthProvider } from "./context/user-auth-context";
import { SearchBarProvider } from "./context/search-bar-context";

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
