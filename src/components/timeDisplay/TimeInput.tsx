interface TimeProps {
  placeHolder: string;
  eventHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  isRunning: boolean;
}

export const TimeInput: React.FC<TimeProps> = ({
  placeHolder,
  eventHandler,
  value,
  isRunning,
}) => {
  return (
    <div id={placeHolder} className="timerInput">
      <label htmlFor={placeHolder}>{placeHolder.toUpperCase()}</label>
      <input
        onChange={eventHandler}
        id={placeHolder}
        type="number"
        placeholder="00"
        disabled={isRunning}
        value={value}
      ></input>
    </div>
  );
};
