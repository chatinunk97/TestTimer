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

More about clearInterval(interval);

clearInterval(interval)
is used to undo the interval setup earlier in the code
for example

```
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
```

The purpose of this useEffect is to tick the clock every 1 miliseconds
which we have to set it up in setInterval because we can't just expect the system to tick every 1 ms
since the system is more faster than that so we have to 'queue' it to wait for 1 miliseconds

So what interval does it it 'queues' the callback function every 1 miliseconds
this will go on forever
but we want it only to do only once per everytime the dependency array changes so we have to 'cleanup' the interval everytime

You may wonder, If we gonna clear it up everytime what's the point of setting it to just run 1 time and clean it ?

Remember, the point of the setInterval is to wait for 1 milisecond and then change the number. The system can run way faster than 1 ms
so if we don't setInterval or have it wait it will just execute right away resulting in a faster than 1 ms change
