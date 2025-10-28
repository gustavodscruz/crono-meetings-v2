import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { usePreferences } from "./src/context/PreferencesContext";
import StackNavigator from "./src/navigators/StackNavigator";

export const RootApplication = () => {
  const { theme } = usePreferences();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};
