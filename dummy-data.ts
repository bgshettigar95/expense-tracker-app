import { Transaction } from "./model/transaction";

export const transactions: Transaction[] = [
  new Transaction({
    id: "t1",
    type: "income",
    amount: 3500,
    date: new Date("2025-01-01"),
    wallet: "Bank Account",
    description: "January Salary",
  }),
  new Transaction({
    id: "t2",
    type: "expense",
    amount: 120,
    date: new Date("2025-01-03"),
    category: "Food",
    description: "Lunch at cafe",
    receiptImage: "https://example.com/receipt1.jpg",
  }),
  new Transaction({
    id: "t3",
    type: "expense",
    amount: 80,
    date: new Date("2025-01-05"),
    category: "Transport",
    description: "Taxi fare",
  }),
  new Transaction({
    id: "t4",
    type: "income",
    amount: 500,
    date: new Date("2025-01-10"),
    wallet: "Cash",
    description: "Freelance work",
  }),
  new Transaction({
    id: "t5",
    type: "expense",
    amount: 950,
    date: new Date("2025-01-12"),
    category: "Shopping",
    description: "Clothes & accessories",
  }),
  new Transaction({
    id: "t6",
    type: "income",
    amount: 200,
    date: new Date("2025-01-15"),
    wallet: "Savings Account",
    description: "Interest earned",
  }),
];
