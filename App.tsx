import { StyleSheet } from "react-native";
import AppNavigator from "./AppNavigator";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";

export default function App() {
  const theme = useTheme();

  return (
    <ThemeProvider>
      <StatusBar style={theme.statusBarStyle} />
      <AppNavigator />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
