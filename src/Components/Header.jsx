import { useState } from "react";
import { ThemeContext, themes } from "../theme/themeContext";
import logo from "../assets/logo.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <header className="header">
      <img src={logo} alt="1NFT" className="logo" />

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
