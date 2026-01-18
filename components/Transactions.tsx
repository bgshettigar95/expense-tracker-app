import React from "react";
import { Text, View } from "react-native";
import { Transaction } from "../model/transaction";

const Transactions = ({ transaction }: { transaction: Transaction }) => {
  return (
    <View>
      <Text>{transaction.description}</Text>
    </View>
  );
};

export default Transactions;
