import { StyleSheet } from "react-native";
import AppNavigator from "./AppNavigator";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, useTheme } from "./theme/ThemeProvider";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  const theme = useTheme();

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <StatusBar style={theme.statusBarStyle} />
          <AppNavigator />
        </ThemeProvider>
      </Provider>
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
