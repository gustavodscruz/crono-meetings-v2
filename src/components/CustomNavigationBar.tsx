import { Appbar, useTheme } from "react-native-paper";
import { getHeaderTitle, HeaderOptions } from "@react-navigation/elements";
import {
  ParamListBase,
  RouteProp,
  DocumentTitleOptions,
  NavigationProp,
  Route,
} from "@react-navigation/native";
import {
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { usePreferences } from "../context/PreferencesContext";

type BackButtonProps = {
  title: string | undefined;
  href: string | undefined;
};

export type CustomNavigationBarProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: Route<string>;
  options: NativeStackNavigationOptions;
  back?: BackButtonProps;
};

export default function CustomNavigationBar({
  navigation,
  route,
  options,
  back,
}: CustomNavigationBarProps) {
  const title = getHeaderTitle(options, route.name);

  const theme = useTheme();

  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.surface }}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
}
