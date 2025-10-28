import { StatusBar } from "expo-status-bar";
import { usePreferences } from "../context/PreferencesContext";

export const CustomStatusBar = () => {
  const { theme } = usePreferences();

  return <StatusBar style={!theme.dark ? "light" : "dark"} />;
};
