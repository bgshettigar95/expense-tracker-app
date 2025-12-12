import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import GetStarted from "./GetStarted";
import Dashboard from "./Dashboard";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
