import React from "react";

import { useColorScheme } from "react-native";
import {
  MergedTheme,
  PreferencesContext,
  PreferencesProviderProps,
} from "./types";
import { darkTheme, lightTheme } from "../theme/theme-configuration";

export const PreferencesProvider = ({ children }: PreferencesProviderProps) => {
  const colorScheme = useColorScheme();

  const [isThemeDark, setIsThemeDark] = React.useState(colorScheme == "dark");

  const toggleTheme = () => {
    setIsThemeDark(!isThemeDark);
  };

  let theme: MergedTheme = isThemeDark ? lightTheme : darkTheme;

  return (
    <PreferencesContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => React.useContext(PreferencesContext);
