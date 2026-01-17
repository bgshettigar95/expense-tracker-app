import React, { useMemo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "../theme/ThemeProvider";
import { colors, fontSizes, spacing } from "../theme/tokens";
import { StyleSheet, Text, View } from "react-native";
import { Theme } from "../theme/theme.types";

const ExpenseDetailsCard = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <LinearGradient
      style={styles.expenseDetailContainer}
      colors={[theme.primary, theme.secondary, theme.primary]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.totalBalanceContainer}>
        <Text style={styles.label}>Total Balance</Text>
        <Text style={styles.totalValue}>$ 482.50</Text>
      </View>

      <View style={styles.expenseStatus}>
        <View>
          <Text style={styles.subLabel}>
            <Ionicons
              name="arrow-up"
              size={fontSizes.md}
              color={theme.textSecondary}
            />
            Income
          </Text>
          <Text style={styles.incomeValue}>$ 2896</Text>
        </View>
        <View>
          <Text style={styles.subLabel}>
            <Ionicons
              name="arrow-down"
              size={fontSizes.md}
              color={theme.textSecondary}
            />
            Expense
          </Text>
          <Text style={styles.expenseValue}>$ 2896</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default ExpenseDetailsCard;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    expenseDetailContainer: {
      alignSelf: "center",
      width: "90%",
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.lg,
      backgroundColor: theme.primary,
      borderRadius: 14,
      elevation: 12,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      justifyContent: "space-between",
    },
    totalBalanceContainer: {
      marginBottom: spacing.lg,
    },
    expenseStatus: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    label: {
      color: "#dbd4d4",
      fontWeight: "600",
      fontSize: fontSizes.md,
    },
    totalValue: {
      color: "#dbd4d4",
      fontWeight: "bold",
      fontSize: fontSizes.xl,
    },
    subLabel: { color: "#dbd4d4", fontWeight: "500" },
    incomeValue: {
      color: colors.income,
      fontSize: fontSizes.lg,
      fontWeight: "bold",
    },
    expenseValue: {
      color: colors.expense,
      fontSize: fontSizes.lg,
      fontWeight: "bold",
    },
  });
