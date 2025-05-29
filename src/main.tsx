import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./components/Navbar/ThemeContext";
createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
