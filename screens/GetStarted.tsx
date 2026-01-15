import React, { useLayoutEffect, useMemo } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { RootStackParamList } from "../AppNavigator";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../theme/ThemeProvider";
import { createCommonStyles } from "../styles/commonStyles";
import { spacing } from "../theme/tokens";

type Props = NativeStackScreenProps<RootStackParamList, "GetStarted">;

const GetStarted = ({ navigation }: Props) => {
  const theme = useTheme();
  const commonStyles = useMemo(() => createCommonStyles(theme), [theme]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={commonStyles.navLink}> Sign In</Text>
          </Pressable>
        );
      },
    });
  }, []);

  return (
    <View style={[styles.container, commonStyles.screen]}>
      <LinearGradient
        colors={[theme.background, theme.border]}
        style={styles.imgContainer}
      >
        <Image
          source={require("../assets/homescreen.png")}
          style={styles.image}
        />
      </LinearGradient>

      <View style={styles.content}>
        <Text style={[commonStyles.title, commonStyles.textCenter]}>
          Stay on top of your expenses, effortlessly
        </Text>
        <Text style={[commonStyles.description, commonStyles.textCenter]}>
          Track your daily expenses and manage your money smarter. Stay
          organized and achieve your financial goals.
        </Text>
        <TouchableOpacity
          style={[commonStyles.button, commonStyles.buttonPrimary]}
          onPress={() => navigation.navigate("SignUp")}
        >
          <Text style={commonStyles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 80,
  },
  imgContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
    flexBasis: "60%",
  },
  image: {
    resizeMode: "contain",
    height: 350,
    width: 350,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: spacing.sm,
  },
});

export default GetStarted;
