# Design

Timer input Minutes and seconds MM : SS
Numbers of questions for that test X Questions

Find a way to count every seconds
Find a way to update the current question the use should be on (if possible link to the timer ?)

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

# How does setInterval() work

setInterval() is a function in JavaScript that is used to repeatedly execute a given function at a specified interval. It takes two arguments: the first argument is the function to be executed, and the second argument is the time interval (in milliseconds) between each execution.

Here is an example to illustrate how setInterval() works:

```
setInterval(function() {
  // code to be executed repeatedly
  console.log("This will be printed every 2 seconds");
}, 2000);
```

In the example above, the provided anonymous function will be executed every 2 seconds (2000 milliseconds) and will print the message "This will be printed every 2 seconds" to the console.
[Source ](https://www.shecodes.io/athena/143127-how-does-setinterval-work-in-javascript).
