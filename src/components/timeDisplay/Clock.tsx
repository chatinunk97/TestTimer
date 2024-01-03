import { Timer } from "./Timer";
import { useMainContext } from "../../hooks/useMainContext";
import { useState } from "react";
export const Clock: React.FC = () => {
  const { timeState } = useMainContext();
  const [time, setTime] = useState(timeState * 60 * 60);
  return (
    <div>
      <h1>Time Left</h1>
      {time ? <Timer time={time} setTime={setTime} /> : <></>}
    </div>
  );
};
