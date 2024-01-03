import { useEffect } from "react";

interface TimerProps {
  time: number;
  setTime: (time: number) => void;
}

export const Timer: React.FC<TimerProps> = ({ time, setTime }) => {
  useEffect(() => {
    const interval = setInterval(() => setTime(time - 1), 10);
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return <div>{time}</div>;
};
