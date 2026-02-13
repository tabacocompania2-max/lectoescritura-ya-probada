import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  variant?: "full" | "compact";
}

const getTargetDate = () => {
  const key = "promo_end_date";
  const stored = localStorage.getItem(key);
  if (stored) {
    const date = new Date(stored);
    if (date.getTime() > Date.now()) return date;
  }
  // Set 48h from first visit
  const target = new Date(Date.now() + 48 * 60 * 60 * 1000);
  localStorage.setItem(key, target.toISOString());
  return target;
};

const useCountdown = () => {
  const [target] = useState(getTargetDate);
  const [timeLeft, setTimeLeft] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setTimeLeft({
        h: Math.floor(diff / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
};

const pad = (n: number) => String(n).padStart(2, "0");

const TimeBox = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="bg-foreground/10 text-foreground font-bold text-lg md:text-xl rounded-lg px-3 py-1.5 min-w-[2.8rem] text-center tabular-nums">
      {value}
    </span>
    <span className="text-[10px] text-muted-foreground mt-1 uppercase tracking-wider">{label}</span>
  </div>
);

const CountdownTimer = ({ variant = "full" }: CountdownTimerProps) => {
  const { h, m, s } = useCountdown();

  if (variant === "compact") {
    return (
      <span className="inline-flex items-center gap-1.5 font-bold tabular-nums">
        {pad(h)}:{pad(m)}:{pad(s)}
      </span>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-3">
        <TimeBox value={pad(h)} label="Horas" />
        <span className="text-muted-foreground font-bold text-xl mt-[-1rem]">:</span>
        <TimeBox value={pad(m)} label="Min" />
        <span className="text-muted-foreground font-bold text-xl mt-[-1rem]">:</span>
        <TimeBox value={pad(s)} label="Seg" />
      </div>
      <p className="text-sm text-muted-foreground text-center max-w-sm leading-relaxed">
        Precio promocional por tiempo limitado.<br />
        Este valor puede cambiar en cualquier momento.
      </p>
    </div>
  );
};

export default CountdownTimer;
