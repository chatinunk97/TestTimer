import { useEffect, useState } from "react";
import { useMainContext } from "../../hooks/useMainContext";
import { TimeInput } from "./TimeInput";
import { setTime } from "../../context/MainContext";

interface timeObj {
  id: number;
  placeHolder: string;
  event: setTime;
  value: number;
}
export const Clock: React.FC = () => {
  const {
    minute,
    second,
    milisecond,
    setMinute,
    setSecond,
    setMilisecond,
    setGlobalMilisecond,
    setGlobalMinute,
    setGlobalSecond,
    isRunning,
    setIsrunning,
  } = useMainContext();

  const timeInputArray: timeObj[] = [
    { id: 1, placeHolder: "minutes", event: setMinute, value: minute },
    { id: 2, placeHolder: "seconds", event: setSecond, value: second },
    {
      id: 3,
      placeHolder: "miliseconds",
      event: setMilisecond,
      value: milisecond,
    },
  ];

  // HandleFunctions
  const handleTimeChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setState: setTime
  ) => {
    const input = +event.target.value;
    if (typeof input === "number" && input >= 0 && input <= 60) {
      console.log("first", input);
      setState(input);
    }
    return;
  };
  const handleStart = () => {
    console.log(minute, second, milisecond);
    setGlobalMilisecond(milisecond);
    setGlobalSecond(second);
    setGlobalMinute(minute);
    setIsrunning(!isRunning);
  };

  //#######################  Refactor and seperate the Clock the timer to each file now is to much code in here
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isRunning) {
      interval = setInterval(() => {
        if (milisecond > 0) {
          setMilisecond(milisecond - 1);
        } else if (second > 0) {
          setSecond(second - 1);
          setMilisecond(59);
        } else if (minute > 0) {
          setMinute(minute - 1);
          setSecond(59);
        }
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning, milisecond, second, minute]);

  return (
    <>
      <div className="timerHolder">
        {timeInputArray.map((el) => {
          return (
            <TimeInput
              placeHolder={el.placeHolder}
              eventHandler={(event) => {
                handleTimeChange(event, el.event);
              }}
              value={el.value}
              isRunning={isRunning}
            ></TimeInput>
          );
        })}
      </div>

      <button onClick={handleStart}>{!isRunning ? "Start !" : "Stop!!"}</button>
    </>
  );
};
