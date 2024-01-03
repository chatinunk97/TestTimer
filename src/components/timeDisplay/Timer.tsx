import { useEffect } from "react";

interface TimerProps {
  compTime: number;
  setCompTime: (time: number) => void;
}

export const Timer: React.FC<TimerProps> = ({ compTime, setCompTime }) => {
  useEffect(() => {
    const interval = setInterval(() => setCompTime(compTime - 1), 1000);
    return () => {
      clearInterval(interval);
    };
  }, [compTime]);

  return <div>{compTime}</div>;
};
