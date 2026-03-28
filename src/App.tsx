import Cards from "./components/cards";
import { BgColorProvider } from "./context/bgColorContext";
import { ModalProvider } from "./context/modalContext";
import Modal from "./components/modal";

function App() {
  return (
    <>
      <BgColorProvider>
        <ModalProvider>
          <h1>작업중</h1>
          <Cards />
          <Modal />
        </ModalProvider>
      </BgColorProvider>
    </>
  );
}

export default App;
