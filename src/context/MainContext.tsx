import { createContext, useState } from "react";
interface ChildProps {
  children: React.ReactNode;
}
export type setTime = (number: number) => void;
export interface _MainContext {
  minute: number;
  setMinute: setTime;
  second: number;
  setSecond: setTime;
  milisecond: number;
  setMilisecond: setTime;
}
export const MainContext = createContext<_MainContext | null>(null);

export const MainContextProvider = ({ children }: ChildProps) => {
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(50);
  const [milisecond, setMilisecond] = useState(0);
  const shareObj = {
    minute,
    setMinute,
    second,
    setSecond,
    milisecond,
    setMilisecond,
  };
  return (
    <MainContext.Provider value={shareObj}>{children}</MainContext.Provider>
  );
};
