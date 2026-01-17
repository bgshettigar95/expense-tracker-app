import React, { useMemo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import { createCommonStyles } from "../styles/commonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontSizes, spacing } from "../theme/tokens";
import ExpenseDetailsCard from "../components/ExpenseDetailsCard";
import Transactions from "../components/Transactions";

const Dashboard = () => {
  const theme = useTheme();
  const commonStyles = useMemo(() => createCommonStyles(theme), [theme]);

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        commonStyles.screen,
        commonStyles.container,
        { paddingTop: insets.top },
      ]}
    >
      <View style={styles.header}>
        <Text style={[styles.headerText, { color: theme.textSecondary }]}>
          Hello,
        </Text>
        <Text style={[commonStyles.title]}>UserName</Text>
      </View>

      <ExpenseDetailsCard />

      <Transactions />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  header: {
    marginTop: spacing.lg,
  },
  headerText: {
    fontSize: fontSizes.md,
  },
});
