import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import Login from "./screens/auth/Login";
import SignUp from "./screens/auth/SignUp";
import GetStarted from "./screens/GetStarted";
import { useTheme } from "./theme/ThemeProvider";
import { StatusBar } from "expo-status-bar";
import BottomTabsNavigator from "./BottomTabsNavigator";

export type RootStackParamList = {
  GetStarted: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const theme = useTheme();
  return (
    <NavigationContainer>
      <StatusBar style={theme.statusBarStyle} />
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false, // iOS
          headerStyle: {
            elevation: 0, // Android
            shadowColor: "transparent",
            backgroundColor: theme.background,
          },
          headerTintColor: theme.textPrimary,
          title: "",
        }}
      >
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="Home"
          component={BottomTabsNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
