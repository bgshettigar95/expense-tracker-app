import React, { useLayoutEffect } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "./AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "GetStarted">;

const GetStarted = ({ navigation }: Props) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerStyle: { backgroundColor: "black" },
      headerTintColor: "#fff",
      headerRight: () => {
        return (
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.buttonText}> Sign In</Text>
          </Pressable>
        );
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/homescreen.png")}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Stay on top of your expenses, effortlessly
        </Text>
        <Text style={styles.description}>
          Track your daily expenses and manage your money smarter. Stay
          organized and achieve your financial goals.
        </Text>
        <TouchableOpacity
          style={[styles.button, styles.secondaryButton]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 60,
    backgroundColor: "black",
  },
  image: {
    resizeMode: "contain",
    height: 350,
    width: 350,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 28,
    textAlign: "center",
    color: "#fff",
  },
  description: {
    fontSize: 14,
    marginBottom: 28,
    textAlign: "center",
    color: "lightgrey",
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 8,
    backgroundColor: "#007AFF",
    marginBottom: 15,
    alignItems: "center",
  },
  secondaryButton: {
    backgroundColor: "#5d22caff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default GetStarted;
