import { useEffect, useRef, useState } from "react";

export const useReuniaoController = (
  initialSeconds = 0,
  title = "Designação: Tesouros da Palavra de Deus",
  initialMaxSeconds = 10,
) => {
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [maxMinutes, setMaxMinutes] = useState<number>(initialMaxSeconds);
  const [isEditingDuration, setIsEditingDuration] = useState<boolean>(false);

  // controlador do fab group
  const [state, setState] = useState({ open: false });

  const lastTap = useRef<number | null>(null);

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

  const subtractAMinute = () =>
    setSeconds((seconds) => (seconds >= 60 ? seconds - 60 : seconds));

  const onChangeDuration = (text: string) => {
    setMaxMinutes(!isNaN(parseInt(text)) ? parseInt(text) : 0);

    setInterval(() => {
      setIsEditingDuration(false);
    }, 3000);
  };

  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_TAP_DELAY = 300;

    if (lastTap.current && now - lastTap.current < DOUBLE_TAP_DELAY) {
      setIsEditingDuration(true);
      lastTap.current = null;
    } else {
      lastTap.current = now;
    }
  };

  const finishEditingDuration = () => {
    setIsEditingDuration(false);
  };

  const maxSeconds = maxMinutes * 60;
  const progress = maxSeconds > 0 ? Math.min(seconds / maxSeconds, 1) : 0;
  const progressPercentage = Math.round(progress * 100);

  const maxShowedMinutes = maxMinutes.toString().padStart(2, "0");

  const { open } = state;

  const onStateChange = ({ open }: { open: boolean }) => setState({ open });

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
    onChangeDuration,
    maxMinutes,
    addAMinute,
    subtractAMinute,
    isEditingDuration,
    handleDoubleTap,
    finishEditingDuration,
    progress,
    progressPercentage,
    maxShowedMinutes,
    title,
    open,
    onStateChange,
  };
};
