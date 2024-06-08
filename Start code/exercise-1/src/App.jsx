import React, { useEffect, useState } from "react";

function App() {
  // Manage the weather state
  const [isRaining, setIsRaining] = useState(false);
  const [title, setTitle] = useState("Sunny time");
  const [background, setBackground] = useState("sunny");

  useEffect(() => {
    // Update background color when isRaining changes
    getBackgroundColor();
  }, [isRaining]);

  function onSunClick() {
      // Complete this code when we click on Sunny Time
    setIsRaining(false);
    getTitle(false);
  }

  function onRainClick() {
    // Set weather to rainy and update title
    setIsRaining(true);
    getTitle(true);
  }

  function getTitle(isRaining) {
    // Update title based on the weather
    if (isRaining) {
      setTitle("Rain Time");
    } else {
      setTitle("Sunny Time");
    }
  }

  function getBackgroundColor() {
     // This function manage the main class value, depending on the weather
    if (isRaining) {
      setBackground("rainy");
    } else {
      setBackground("sunny");
    }
  }

  return (
    <main className={background}>
      <h1>{title}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
