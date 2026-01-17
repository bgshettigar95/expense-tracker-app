import { StyleSheet } from "react-native";
import AppNavigator from "./AppNavigator";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const theme = useTheme();

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBar style={theme.statusBarStyle} />
        <AppNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
