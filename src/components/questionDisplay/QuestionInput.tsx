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
  //Track user input on how many question there are
  const [questionCount, setQuestionCount] = useState(0);

  //Shows the timer per question upon setting up
  const timePerQuestion = Math.round(
    (minute * 60 + second + milisecond / 60) / questionCount
  );

  // Use to calculate the initial setup time and the timer's time
  const globalTime = globalminute * 60 + globalsecond + globalmilisecond / 60;
  const timerTime = minute * 60 + second + milisecond / 60;
  return (
    <div>
      <input
        value={questionCount}
        onChange={(e) => {
          setQuestionCount(+e.target.value);
        }}
        disabled={isRunning}
      ></input>

      {isRunning ? (
        <p>
          You should be on question number
          <h1>{Math.ceil((globalTime - timerTime) / timePerQuestion)}</h1>
        </p>
      ) : (
        <p>You have {timePerQuestion} seconds per question</p>
      )}
    </div>
  );
};
