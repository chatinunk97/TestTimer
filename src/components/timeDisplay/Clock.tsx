import { useEffect, useState } from "react";
import { useMainContext } from "../../hooks/useMainContext";
import { TimeInput } from "./TimeInput";
import { setTime } from "../../context/MainContext";

export const Clock: React.FC = () => {
  const { minute, setMinute, second, setSecond, milisecond, setMilisecond } =
    useMainContext();
  const [isRunning, setIsrunning] = useState(false);

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

  interface timeObj {
    id: number;
    placeHolder: string;
    event: setTime;
    value: number;
  }
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

      <button
        onClick={() => {
          setIsrunning(!isRunning);
        }}
      >
        {!isRunning ? "Start !" : "Stop!!"}
      </button>
    </>
  );
};
