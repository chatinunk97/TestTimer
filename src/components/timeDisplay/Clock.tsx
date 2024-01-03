import { Timer } from "./Timer";
import { useMainContext } from "../../hooks/useMainContext";
import { useState } from "react";
export const Clock: React.FC = () => {
  const { timeState } = useMainContext();
  const [compTime, setCompTime] = useState(timeState);
  return (
    <div>
      <h1>Time Left</h1>
      {compTime ? (
        <Timer compTime={compTime} setCompTime={setCompTime} />
      ) : (
        <></>
      )}
    </div>
  );
};
