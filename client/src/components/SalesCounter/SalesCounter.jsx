import React, { useState, useEffect } from "react";
import Counterbg from "../../assets/counterbg.jpg";

const SalesCounter = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${Counterbg})`,
        backgroundSize: "cover",
        width: "100%",
        height: "300px",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        gap: "300px",
        alignItems: "center",
      }}
    >
      <h1 className="text-3xl font-semibold">
        Hurry! Our sales discount is running out!
      </h1>
      <h2 className="text-3xl font-semibold">
        Time Left:
        {timeLeft.days !== undefined
          ? `${timeLeft.days}d : ${timeLeft.hours}h : ${timeLeft.minutes}m : ${timeLeft.seconds}s`
          : "Sale ended"}
      </h2>
    </div>
  );
};

export default SalesCounter;
