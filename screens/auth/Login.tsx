import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useLayoutEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { RootStackParamList } from "../AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const Login = ({ navigation }: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: "#fff",
      headerStyle: { backgroundColor: "black" },
      title: "",
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hey,</Text>
        <Text style={styles.title}>Welcome Back</Text>
      </View>
      <Text style={styles.description}>
        Login now to track all you expenses
      </Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.formControl}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
          placeholderTextColor="lightgrey"
        />

        <TextInput
          style={styles.formControl}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          placeholderTextColor="lightgrey"
        />

        <Pressable>
          <Text style={styles.forgetPassword}>Forget password?</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.secondaryButton]}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.secondaryText}>Don't have an account? </Text>
        <Pressable>
          <Text style={styles.primaryText}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "black",
    paddingHorizontal: 20,
    width: "100%",
  },
  titleContainer: {
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  description: {
    fontSize: 14,
    marginBottom: 28,
    color: "lightgrey",
  },

  formContainer: {
    width: "100%",
    marginBottom: 20,
  },
  formControl: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderWidth: 1,
    borderColor: "lightgrey",
    marginBottom: 20,
    borderRadius: 8,
  },

  forgetPassword: {
    fontSize: 14,
    marginBottom: 28,
    color: "lightgrey",
    textAlign: "right",
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

  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  secondaryText: {
    fontSize: 14,
    marginBottom: 28,
    color: "lightgrey",
    textAlign: "center",
  },

  primaryText: {
    fontSize: 14,
    marginBottom: 28,
    color: "#5d22caff",
    textAlign: "center",
  },
});

export default Login;
