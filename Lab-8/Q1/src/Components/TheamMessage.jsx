import { useState } from "react";

function ThemeMessage() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div style={{
      background: isDarkMode ? "black" : "white",
      color: isDarkMode ? "white" : "black"
    }}>
      {isDarkMode ? "Dark Mode Enabled" : "Light Mode Enabled"}
    </div>
  );
}

export default ThemeMessage;