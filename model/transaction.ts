export type TransactionType = "income" | "expense";

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  type: "income" | "expense";
  category: string | null;
  description?: string;
  wallet: string | null;
  receiptImage?: string | null;
}
