import React, { useMemo } from "react";
import { Transaction } from "../model/transaction";
import { StyleSheet, Text, View } from "react-native";
import { colors, fontSizes, spacing } from "../theme/tokens";
import { Theme } from "../theme/theme.types";
import { useTheme } from "../theme/ThemeProvider";
import { getFormattedDate } from "../utils";

type Props = {
  transaction: Transaction;
};

const TransactionDetail = ({ transaction }: Props) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    // <View style={{ elevation: 2 }}>
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          {transaction.type === "income"
            ? transaction.wallet
            : transaction.category}
        </Text>

        <Text style={styles.description}>{transaction.description}</Text>
      </View>
      <View style={styles.expenseDetail}>
        <Text
          style={[
            styles.amount,
            transaction.type === "income" ? styles.income : styles.expense,
          ]}
        >
          {transaction.type === "income" ? "+" : "-"} ${transaction.amount}
        </Text>
        <Text style={styles.date}>
          {getFormattedDate(new Date(transaction.date))}
        </Text>
      </View>
    </View>
    // </View>
  );
};

export default TransactionDetail;

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: spacing.xs,
      paddingVertical: spacing.sm,
      backgroundColor: "#e0e0e037",
      marginVertical: spacing.xs,
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: fontSizes.lg,
      fontWeight: "bold",
      color: theme.textPrimary,
    },
    description: {
      fontSize: fontSizes.xs,
      color: theme.textSecondary,
    },
    amount: {
      fontSize: fontSizes.lg,
      fontWeight: "600",
      color: theme.textPrimary,
    },
    date: {
      fontSize: fontSizes.xs,
      color: theme.textSecondary,
    },
    expenseDetail: {
      alignItems: "flex-end",
    },
    income: {
      color: colors.income,
    },
    expense: {
      color: colors.expense,
    },
  });
