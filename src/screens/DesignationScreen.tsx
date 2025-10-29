import { Pressable, StyleSheet, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import {
  Card,
  withTheme,
  Text,
  Button,
  TextInput,
  FAB,
} from "react-native-paper";
import { MergedTheme } from "../theme/types";
import { useReuniaoController } from "../controllers/DesignationController";
import * as Progress from "react-native-progress";

function DesingationScreen({ theme }: { theme: MergedTheme }) {
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
    onChangeDuration,
    addAMinute,
    subtractAMinute,
    handleDoubleTap,
    isEditingDuration,
    finishEditingDuration,
    progress,
    progressPercentage,
    title,
    onStateChange,
    open,
  } = useReuniaoController();

  return (
    <SafeAreaView
      style={[styles.safe, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.container}>
        <Card style={[styles.card]}>
          <Card.Content style={styles.cardContent}>
            <Text variant="bodyMedium" style={styles.subtitle}>
              {title}
            </Text>

            <Text variant="headlineLarge" style={styles.timerText}>
              {showedHours}:{showedMinutes}:{showedSeconds}
            </Text>
            <Text variant="bodyMedium" style={styles.subtitle}>
              Tempo da parte
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

            <View style={styles.controlsRow}>
              <Pressable onPress={handleDoubleTap}>
                <TextInput
                  label="Duração (min)"
                  value={maxMinutes.toString()}
                  mode="outlined"
                  editable={isEditingDuration}
                  style={styles.input}
                  onChangeText={onChangeDuration}
                  onBlur={finishEditingDuration}
                  keyboardType="numeric"
                  right={
                    isEditingDuration ? undefined : (
                      <TextInput.Icon icon="pencil" />
                    )
                  }
                />
              </Pressable>
            </View>
            <View style={styles.progressWrapper}>
              <Progress.Circle
                progress={progress}
                color={theme.colors.primary}
                borderColor={theme.colors.card}
                formatText={() => `${progressPercentage}%`}
                size={60}
              />
              {/*<Text variant="bodySmall" style={styles.progressLabel}>
                  {progressPercentage}% — {showedMinutes}:{showedSeconds} /{" "}
                  {maxShowedMinutes}:00 min
                </Text>*/}
            </View>
          </Card.Content>
        </Card>

        <FAB.Group
          open={open}
          visible
          icon={open ? "pencil" : "play"}
          onStateChange={onStateChange}
          style={styles.fabGroup}
          actions={[
            {
              icon: "plus",
              onPress: addAMinute,
              label: "1+ min",
            },
            {
              icon: "minus",
              onPress: subtractAMinute,
              label: "1- min",
            },
          ]}
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
    gap: 8,
  },
  controlButton: { marginLeft: 8 },
  input: { width: 140, marginTop: 12 },
  progressWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  progress: { height: 8, width: "100%", borderRadius: 8 },
  progressLabel: { marginTop: 8 },
  fab: { position: "absolute", right: 16, bottom: 24 },
  fabGroup: { position: "absolute", right: 16, bottom: 24 },
});

export default withTheme(DesingationScreen);
