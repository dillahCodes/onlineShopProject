import { RouterProvider } from "react-router-dom";
import "./tailwind-in.css";
import routers from "./routers/browser-routers";
import ThemeProvider from "./context/theme/thame-provider";
import { StyleProvider } from "@ant-design/cssinjs";
import { SearchBarProvider } from "./context/search-bar-context/search-bar-context";

function App() {
  return (
    <StyleProvider hashPriority="high">
      <ThemeProvider>
        <SearchBarProvider>
          <RouterProvider router={routers} />
        </SearchBarProvider>
      </ThemeProvider>
    </StyleProvider>
  );
}

export default App;
