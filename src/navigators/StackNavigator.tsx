import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ReuniaoScreen from "../screens/ReuniaoScreen";
import { ParamListBase } from "@react-navigation/native";
import CustomNavigationBar from "../components/CustomNavigationBar";

export interface StackParamsList extends ParamListBase {
  Home: undefined;
  Reuniao: undefined;
}

const StackNavigator = () => {
  const Stack = createNativeStackNavigator<StackParamsList>();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: (props) => <CustomNavigationBar {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Reuniao" component={ReuniaoScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
