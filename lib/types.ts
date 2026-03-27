export type TransactionType = "income" | "expense";

export interface Transaction {
  id: string;
  type: TransactionType;
  amount: number;
  category: string;
  description: string;
  date: string; // ISO date string YYYY-MM-DD
  currency: string; // ISO 4217 currency code e.g. "USD"
}

export interface Category {
  name: string;
  type: TransactionType;
  color: string;
}

export interface MonthlySummary {
  month: string; // "Jan", "Feb", etc.
  income: number;
  expenses: number;
}
