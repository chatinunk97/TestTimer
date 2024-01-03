import { createContext, useState } from "react";
interface ChildProps {
  children: React.ReactNode;
}

export interface _MainContext {
  timeState: number;
}

export const MainContext = createContext<_MainContext | null>(null);

export const MainContextProvider = ({ children }: ChildProps) => {
  const [timeState, setTimeState] = useState(5);
  const shareObj = { timeState, setTimeState };
  return (
    <MainContext.Provider value={shareObj}>{children}</MainContext.Provider>
  );
};
