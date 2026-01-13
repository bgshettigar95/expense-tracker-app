import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { RootStackParamList } from "../AppNavigator";
import { useTheme } from "../../theme/ThemeProvider";
import { createCommonStyles } from "../../styles/commonStyles";
import { spacing } from "../../theme/tokens";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const SignUp = ({ navigation }: Props) => {
  const theme = useTheme();
  const commonStyles = useMemo(() => createCommonStyles(theme), [theme]);

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={[commonStyles.screen, styles.container]}>
      <View style={styles.titleContainer}>
        <Text style={commonStyles.title}>Let's,</Text>
        <Text style={commonStyles.title}>Get Started</Text>
      </View>
      <Text style={commonStyles.description}>
        Create an account to track your expenses
      </Text>

      <View style={styles.formContainer}>
        <TextInput
          style={commonStyles.formControl}
          onChangeText={setUserName}
          value={userName}
          placeholder="Enter your name"
          placeholderTextColor="lightgrey"
        />

        <TextInput
          style={commonStyles.formControl}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
          placeholderTextColor="lightgrey"
        />

        <TextInput
          style={commonStyles.formControl}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          placeholderTextColor="lightgrey"
        />

        <Pressable style={[commonStyles.button, commonStyles.buttonPrimary]}>
          <Text style={commonStyles.buttonText}>Sign Up</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={commonStyles.secondaryText}>
          Already have an account?{" "}
        </Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={[commonStyles.primaryText, { color: theme.secondary }]}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.lg,
  },
  titleContainer: {
    paddingBottom: spacing.sm,
  },
  formContainer: {
    width: "100%",
    marginBottom: spacing.md,
  },
  footer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default SignUp;
