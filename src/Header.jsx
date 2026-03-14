import React, { useState, useEffect } from 'react';

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // code within runs when the darkMode state changes!!
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return (
    <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">PORTFOL</div>
          <button
            className="theme-toggle"
            id="themeToggle"
            onClick={toggleDarkMode}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
