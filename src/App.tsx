import { BgColorProvider } from "./context/bgColorContext";
import { ModalProvider } from "./context/modalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Color from "./pages/ColorPage";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BgColorProvider>
          <ModalProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/colors/:code" element={<Color />} />
              </Routes>
            </BrowserRouter>
          </ModalProvider>
        </BgColorProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
