import { useState } from "react";
import { useMainContext } from "../../hooks/useMainContext";

export const QuestionInput = () => {
  const {
    globalmilisecond,
    globalminute,
    globalsecond,
    milisecond,
    second,
    minute,
    isRunning,
  } = useMainContext();
  const [questionCount, setQuestionCount] = useState(0);

  const totalGlobalTime =
    globalminute * 60 + globalsecond + globalmilisecond / 60;
  const totalTimerTime = minute * 60 + second + milisecond / 60;

  return (
    <div>
      <input
        value={questionCount}
        onChange={(e) => {
          setQuestionCount(+e.target.value);
        }}
      ></input>
      {isRunning ? <p>{totalGlobalTime}</p> : <p>{totalTimerTime}</p>}
    </div>
  );
};
