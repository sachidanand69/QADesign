import { useState, useEffect, useContext, useRef } from "react";
import { StoreContext } from "../../Context/Context"; 
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const inputElement = useRef("");

  const focusInput = () => {
    inputElement.current.focus();
  };

  const {title}=useContext(StoreContext)

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (seconds) => {
    const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg shadow-lg w-64 bg-white">
      <h2 className="text-2xl font-bold">Stopwatch</h2>
      <p className="text-xl font-mono">{formatTime(time)}</p>
      <div className="flex gap-2">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={handleStop}
          disabled={!isRunning}
        >
          Stop
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <h2>{title}</h2>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default Stopwatch;
