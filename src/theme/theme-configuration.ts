import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";

import {
  adaptNavigationTheme,
  MD3DarkTheme,
  MD3LightTheme,
} from "react-native-paper";

import merge from "deepmerge";
import { lightSchemeColors } from "./light-theme-colors";
import { darkSchemeColors } from "./dark-theme-colors";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

export const lightTheme = merge(CombinedDefaultTheme, {
  lightSchemeColors,
});

export const darkTheme = merge(CombinedDarkTheme, {
  darkSchemeColors,
});
