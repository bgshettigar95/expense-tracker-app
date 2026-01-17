import React, { createContext, useContext, ReactNode, FC } from "react";
import { useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "./themes";
import { Theme } from "./theme.types";

const ThemeContext = createContext<Theme>(darkTheme);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  // const scheme = useColorScheme();
  // const theme: Theme = scheme === "dark" ? darkTheme : lightTheme;
  const theme = darkTheme;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): Theme => {
  return useContext(ThemeContext);
};
