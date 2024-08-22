import React, { useState, useEffect } from "react";

const TopBar = () => {
  const [messages, setMessages] = useState([
    "Free shipping above $250",
    "New arrivals are here! Take a peek now",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to switch messages
  const switchMessage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  // Auto-switch messages every 2 seconds
  useEffect(() => {
    const interval = setInterval(switchMessage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white flex justify-between items-center p-1">
      <div className="flex items-center">
        {/* Left scroll image */}
        <button onClick={switchMessage}>&lt;</button>
      </div>
      <span className={currentIndex === 1 ? "underline" : ""}>
        {messages[currentIndex]}
      </span>
      <div className="flex items-center">
        {/* Right scroll image */}
        <button onClick={switchMessage}>&gt;</button>
      </div>
    </div>
  );
};

export default TopBar;
