import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text, withTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParamsList } from "../navigators/StackNavigator";
import { type MergedTheme } from "../theme/types";

const HomeScreen = ({ theme }: { theme: MergedTheme }) => {
  const navigation = useNavigation<NavigationProp<StackParamsList>>();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Card style={styles.card}>
        <Card.Title
          title="CronoMeetings"
          titleVariant="headlineLarge"
          subtitle="Seu cronômetro de reuniões"
          subtitleVariant="bodyLarge"
          left={(props) => <Avatar.Icon {...props} icon="timer-outline" />}
        />
        <Card.Content>
          <Text variant="bodyMedium" style={styles.text}>
            Otimize seu tempo e mantenha suas reuniões produtivas.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={() => navigation.navigate("Reuniao")}
            style={styles.button}
            icon="play-circle-outline"
          >
            Iniciar Reunião
          </Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  card: {
    padding: 8,
  },
  text: {
    textAlign: "center",
    marginVertical: 16,
  },
  button: {
    flex: 1,
  },
});

export default withTheme(HomeScreen);
