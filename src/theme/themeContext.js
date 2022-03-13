import { createContext } from "react";

export const themes = {
      light: "",
      dark: "dark-content",
};

export const ThemeContext = createContext({
      theme: themes.light,
      changeTheme: () => { },
});