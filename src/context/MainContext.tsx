import { SetStateAction, createContext, useState } from "react";
interface ChildProps {
  children: React.ReactNode;
}
export type setTime = (number: number) => void;
export interface _MainContext {
  // Storing initial value for tracking
  globalminute: number;
  setGlobalMinute: setTime;
  globalsecond: number;
  setGlobalSecond: setTime;
  globalmilisecond: number;
  setGlobalMilisecond: setTime;

  // State to tick every 1 ms
  minute: number;
  setMinute: setTime;
  second: number;
  setSecond: setTime;
  milisecond: number;
  setMilisecond: setTime;

  //
  isRunning: boolean;
  setIsrunning: (isRunning: boolean) => void;
}
export const MainContext = createContext<_MainContext | null>(null);

export const MainContextProvider = ({ children }: ChildProps) => {
  // First set of time states for storing the initial time
  const [globalminute, setGlobalMinute] = useState(0);
  const [globalsecond, setGlobalSecond] = useState(0);
  const [globalmilisecond, setGlobalMilisecond] = useState(0);

  // Second set of time states for tracking the timer every 1 ms
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [milisecond, setMilisecond] = useState(0);
  const [isRunning, setIsrunning] = useState(false);
  const shareObj = {
    globalminute,
    setGlobalMinute,
    globalsecond,
    setGlobalSecond,
    globalmilisecond,
    setGlobalMilisecond,
    ///
    minute,
    setMinute,
    second,
    setSecond,
    milisecond,
    setMilisecond,
    //
    isRunning,
    setIsrunning,
  };
  return (
    <MainContext.Provider value={shareObj}>{children}</MainContext.Provider>
  );
};
