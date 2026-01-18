import React, { useEffect, useMemo } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useTheme } from "../theme/ThemeProvider";
import { createCommonStyles } from "../styles/commonStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontSizes, spacing } from "../theme/tokens";
import ExpenseDetailsCard from "../components/ExpenseDetailsCard";
import Transactions from "../components/Transactions";
import { useDispatch, useSelector } from "react-redux";
import { ApiDispatch, RootState } from "../store";
import { fetchTransactions } from "../store/transactionSlice";

const Dashboard = () => {
  const theme = useTheme();
  const commonStyles = useMemo(() => createCommonStyles(theme), [theme]);

  const insets = useSafeAreaInsets();

  const dispatch = useDispatch<ApiDispatch>();

  const { transactions, loading, error } = useSelector(
    (state: RootState) => state.transactions,
  );

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

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

      <View style={styles.main}>
        <Text style={commonStyles.title}>Recent Transactions</Text>
        {loading && (
          <ActivityIndicator
            size="large"
            style={commonStyles.loading}
            color={theme.primary}
          />
        )}

        {error && <Text style={commonStyles.errorMessage}>error</Text>}

        {!loading && !error && (
          <FlatList
            data={transactions}
            renderItem={(itemData) => (
              <Transactions transaction={itemData.item} />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
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
  main: {
    marginTop: spacing.lg,
    flex: 1,
  },
});
