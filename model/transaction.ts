export type TransactionType = "income" | "expense";

export class Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  date: Date;
  description?: string;
  category: string | null;
  wallet: string | null;
  receiptImage?: string;

  constructor(params: {
    id: string;
    type: TransactionType;
    amount: number;
    date: Date;
    description?: string;
    category?: string | null;
    wallet?: string | null;
    receiptImage?: string;
  }) {
    this.id = params.id;
    this.type = params.type;
    this.amount = params.amount;
    this.date = params.date;
    this.description = params.description ?? "";
    this.category = params.type === "expense" ? (params.category ?? "") : null;
    this.wallet = params.type === "income" ? (params.wallet ?? "") : null;
    this.receiptImage = params.receiptImage;
  }
}
