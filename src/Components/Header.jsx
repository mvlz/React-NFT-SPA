import { useState } from "react";
import { ThemeContext, themes } from "../theme/themeContext";
import { Iconly } from "react-iconly";
import logo from "../assets/logo.png";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <header className="header">
      <img src={logo} alt="1NFT" className="logo" />
      <div className="rightheader">
        <Iconly
          set="light"
          name="Notification"
          primaryColor="black"
          stroke="bold"
        />
        <Iconly set="light" name="Chat" primaryColor="black" stroke="bold" />
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <button
              className="darkModeBtn"
              onClick={() => {
                setDarkMode(!darkMode);
                changeTheme(darkMode ? themes.dark : themes.light);
              }}
            >
              <span
                className={darkMode ? "sun" : "moon"}
                // style={{
                //   boxShadow: "inset 0px 10px #999, inset 0px 4px 1px 1px #999",
                // }}
              ></span>
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    </header>
  );
};

export default Header;
