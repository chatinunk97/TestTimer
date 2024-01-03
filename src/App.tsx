import { Clock } from "./components/timeDisplay";
import { MainContextProvider } from "./context/MainContext";

import "./App.css";

function App() {
  return (
    <>
      <MainContextProvider>
        <Clock />
      </MainContextProvider>
    </>
  );
}

export default App;
