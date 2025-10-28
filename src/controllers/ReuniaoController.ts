import { useEffect, useState } from "react";

export const useReuniaoController = (initialSeconds = 0) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [maxMinutes, setMaxMinutes] = useState<number>(10);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      intervalId = setInterval(() => setSeconds(seconds + 1), 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, seconds]);

  const startCronometer = () => {
    setIsRunning(true);
  };

  const stopCronometer = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setSeconds(0);
  };

  const minutes = Math.floor(seconds / 60);

  const showedMinutes = (minutes % 60).toString().padStart(2, "0");

  const hours = Math.floor(seconds / 3600);

  const showedHours = hours.toString().padStart(2, "0");

  const showedSeconds = (seconds % 60).toString().padStart(2, "0");

  const isResetable: boolean = seconds > 0;

  const addAMinute = () => setSeconds((seconds) => seconds + 60);

  return {
    reset,
    startCronometer,
    stopCronometer,
    seconds,
    isRunning,
    showedMinutes,
    showedHours,
    showedSeconds,
    isResetable,
    setMaxMinutes,
    maxMinutes,
    addAMinute,
  };
};
