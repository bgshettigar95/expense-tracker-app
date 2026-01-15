import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Text, View } from "react-native";

const Tab = createBottomTabNavigator();

const Dashboard = () => {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};

export default Dashboard;
