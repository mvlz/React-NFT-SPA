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
              {darkMode ? (
                <svg viewBox="0 0 512 512" width="24" height="24">
                  <path
                    fill="#000"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
                  ></path>
                  <circle
                    cx="256"
                    cy="256"
                    r="80"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                  ></circle>
                </svg>
              ) : (
                <svg viewBox="0 0 512 512" width="24" height="24">
                  <path
                    d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  ></path>
                </svg>
              )}
            </button>
          )}
        </ThemeContext.Consumer>
      </div>
    </header>
  );
};

export default Header;
