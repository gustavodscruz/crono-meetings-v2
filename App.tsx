import { PreferencesProvider } from "./src/context/PreferencesContext";
import { RootApplication } from "./RootApplication";
import { CustomStatusBar } from "./src/components/CustomStatusBar";

export default function App() {
  return (
    <PreferencesProvider>
      <RootApplication />
      <CustomStatusBar />
    </PreferencesProvider>
  );
}
