import Cards from "./components/cards";
import { BgColorProvider } from "./context/bgColorContext";

function App() {
  return (
    <>
      <BgColorProvider>
        <h1>작업중</h1>
        <Cards />
      </BgColorProvider>
    </>
  );
}

export default App;
