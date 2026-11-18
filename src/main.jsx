import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MainStore from "./stores/MainStore.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <MainStore>
      <App />
    </MainStore>
  </QueryClientProvider>,
);
