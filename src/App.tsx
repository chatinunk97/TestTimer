import { Clock } from "./components/timeDisplay";
import { QuestionInput } from "./components/questionDisplay";
import { MainContextProvider } from "./context/MainContext";

import "./App.css";

function App() {
  return (
    <>
      <MainContextProvider>
        <Clock />
        <QuestionInput />
      </MainContextProvider>
    </>
  );
}

export default App;
