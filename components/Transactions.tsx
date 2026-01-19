import React from "react";
import { FlatList } from "react-native";
import { Transaction } from "../model/transaction";
import TransactionDetail from "./TransactionDetail";

const Transactions = ({ transactions }: { transactions: Transaction[] }) => {
  return (
    <FlatList
      data={transactions}
      renderItem={(itemData) => (
        <TransactionDetail transaction={itemData.item} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Transactions;
