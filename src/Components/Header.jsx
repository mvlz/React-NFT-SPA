import { useState } from "react";
import { ThemeContext, themes } from "../theme/themeContext";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <header className="header">
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <button
            color="link"
            onClick={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.dark : themes.light);
            }}
          >
            <span className="d-lg-none d-md-block">Switch mode</span>
          </button>
        )}
      </ThemeContext.Consumer>
    </header>
  );
};

export default Header;
