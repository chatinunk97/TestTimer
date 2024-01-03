# TS with Context

When we initialize a context using something like

```
export const MainContext = createContext()

```

We are creating a context which would be assesable by other components that are under the context's context provider

BUT !
When we initialize it, it's 'undefined' that means TS will throw us an error like "This context may be undefined is it OK ?"

So in order to prevent that we have to do a null checking first before rendering

Fortunately, we use a custom hook to shorten the useContext(context) part so we can check it here

```
import { MainContext, _MainContext } from "../context/MainContext";
import { useContext } from "react";

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("No context");
  }
  return context;
};


```
