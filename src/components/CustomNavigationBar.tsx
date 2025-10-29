import { Appbar, Menu, useTheme } from "react-native-paper";
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
import { useState } from "react";

type BackButtonProps = {
  title: string | undefined;
  href: string | undefined;
};

export type CustomNavigationBarProps = {
  navigation: NativeStackNavigationProp<ParamListBase>;
  route: Route<string>;
  options: NativeStackNavigationOptions;
  back?: BackButtonProps;
  routesOptionsEnabled?: string[];
};

export default function CustomNavigationBar({
  navigation,
  route,
  options,
  back,
  routesOptionsEnabled = [],
}: CustomNavigationBarProps) {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const title = getHeaderTitle(options, route.name);

  const theme = useTheme();

  const isRouteWithOptions = !!routesOptionsEnabled.find(
    (item) => item === route.name,
  );

  return (
    <Appbar.Header style={{ backgroundColor: theme.colors.surface }}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {isRouteWithOptions ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}
        >
          <Menu.Item
            onPress={() => {
              console.log("Option 1 was pressed");
            }}
            title="Compartilhar"
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
}
