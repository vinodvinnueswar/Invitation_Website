
import React, { useEffect, useState } from "react";

const Count_Down = () => {
 const weddingDate = new Date("2026-05-20T09:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-Raju-Rani">
        <h2>Our Wedding Countdown</h2>
      <div className="timer-Raju-Rani">
        <div><span>{timeLeft.days}</span><p>Days</p></div>
        <div><span>{timeLeft.hours}</span><p>Hours</p></div>
        <div><span>{timeLeft.minutes}</span><p>Minutes</p></div>
        <div><span>{timeLeft.seconds}</span><p>Seconds</p></div>
      </div>
      </div>
  );
};

export default Count_Down