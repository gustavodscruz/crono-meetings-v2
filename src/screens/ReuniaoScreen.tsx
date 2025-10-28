import { SafeAreaView, StyleSheet, View } from "react-native";
import {
  Card,
  withTheme,
  Text,
  Button,
  TextInput,
  ProgressBar,
  FAB,
} from "react-native-paper";
import { MergedTheme } from "../theme/types";
import { useReuniaoController } from "../controllers/ReuniaoController";

function ReuniaoScreen({ theme }: { theme: MergedTheme }) {
  const {
    showedHours,
    showedMinutes,
    showedSeconds,
    startCronometer,
    stopCronometer,
    reset,
    isRunning,
    isResetable,
    maxMinutes,
    setMaxMinutes,
    addAMinute,
  } = useReuniaoController();

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.container}>
        <Card style={[styles.card]}>
          <Card.Content style={styles.cardContent}>
            <Text variant="headlineLarge" style={styles.timerText}>
              {showedHours}:{showedMinutes}:{showedSeconds}
            </Text>
            <Text variant="bodyMedium" style={styles.subtitle}>
              Tempo de reunião — controles visuais abaixo
            </Text>

            <View style={styles.controlsRow}>
              <Button
                mode="contained"
                icon="play"
                onPress={startCronometer}
                disabled={isRunning}
              >
                Iniciar
              </Button>
              <Button
                mode="outlined"
                icon="pause"
                onPress={stopCronometer}
                style={styles.controlButton}
                disabled={!isRunning}
              >
                Pausar
              </Button>
            </View>
            <Button
              mode="text"
              icon="stop"
              onPress={reset}
              style={styles.controlButton}
              disabled={!isResetable}
            >
              Resetar
            </Button>

            <TextInput
              label="Duração (min)"
              value={maxMinutes.toString()}
              mode="outlined"
              editable={false}
              style={styles.input}
              onChangeText={(text) => setMaxMinutes(parseInt(text))}
            />

            <View style={styles.progressWrapper}>
              <ProgressBar progress={0.3} style={styles.progress} />
              <Text variant="bodySmall" style={styles.progressLabel}>
                30% — 00:09 / 00:30
              </Text>
            </View>
          </Card.Content>
        </Card>

        <FAB
          icon="play"
          label="1+ min"
          onPress={addAMinute}
          style={[styles.fab]}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  container: { flex: 1, padding: 8 },
  card: { borderRadius: 8, padding: 16 },
  cardContent: { alignItems: "center", paddingVertical: 20 },
  timerText: { marginBottom: 8 },
  subtitle: { textAlign: "center", marginBottom: 12 },
  controlsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 8,
    justifyContent: "center",
  },
  controlButton: { marginLeft: 8 },
  input: { width: 140, marginTop: 12 },
  progressWrapper: { width: "100%", marginTop: 12, alignItems: "center" },
  progress: { height: 8, width: "100%", borderRadius: 8 },
  progressLabel: { marginTop: 8 },
  fab: { position: "absolute", right: 16, bottom: 24 },
});

export default withTheme(ReuniaoScreen);
