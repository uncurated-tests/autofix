import { Category, Transaction } from "./types";

export const DEFAULT_CURRENCY = "USD";

export const CATEGORIES: Category[] = [
  { name: "Salary", type: "income", color: "#22c55e" },
  { name: "Freelance", type: "income", color: "#84cc16" },
  { name: "Investments", type: "income", color: "#10b981" },
  { name: "Gifts", type: "income", color: "#06b6d4" },
  { name: "Housing", type: "expense", color: "#f97316" },
  { name: "Food", type: "expense", color: "#eab308" },
  { name: "Transport", type: "expense", color: "#8b5cf6" },
  { name: "Health", type: "expense", color: "#ec4899" },
  { name: "Entertainment", type: "expense", color: "#f43f5e" },
  { name: "Utilities", type: "expense", color: "#6366f1" },
  { name: "Shopping", type: "expense", color: "#f59e0b" },
  { name: "Other", type: "expense", color: "#94a3b8" },
];

export const INITIAL_TRANSACTIONS: Transaction[] = [
  { id: "1", type: "income", amount: 4500, category: "Salary", description: "Monthly salary", date: "2026-03-01", currency: DEFAULT_CURRENCY },
  { id: "2", type: "income", amount: 800, category: "Freelance", description: "Web design project", date: "2026-03-05", currency: DEFAULT_CURRENCY },
  { id: "3", type: "expense", amount: 1200, category: "Housing", description: "Monthly rent", date: "2026-03-01", currency: DEFAULT_CURRENCY },
  { id: "4", type: "expense", amount: 320, category: "Food", description: "Groceries", date: "2026-03-08", currency: DEFAULT_CURRENCY },
  { id: "5", type: "expense", amount: 90, category: "Transport", description: "Monthly transit pass", date: "2026-03-02", currency: DEFAULT_CURRENCY },
  { id: "6", type: "expense", amount: 60, category: "Entertainment", description: "Streaming subscriptions", date: "2026-03-10", currency: DEFAULT_CURRENCY },
  { id: "7", type: "expense", amount: 150, category: "Utilities", description: "Electricity & water", date: "2026-03-12", currency: DEFAULT_CURRENCY },
  { id: "8", type: "expense", amount: 200, category: "Shopping", description: "New shoes", date: "2026-03-15", currency: DEFAULT_CURRENCY },
  { id: "9", type: "income", amount: 250, category: "Investments", description: "Dividend payout", date: "2026-03-15", currency: DEFAULT_CURRENCY },
  { id: "10", type: "expense", amount: 75, category: "Health", description: "Pharmacy", date: "2026-03-18", currency: DEFAULT_CURRENCY },
  { id: "11", type: "expense", amount: 45, category: "Food", description: "Restaurant dinner", date: "2026-03-20", currency: DEFAULT_CURRENCY },
  { id: "12", type: "expense", amount: 30, category: "Entertainment", description: "Movie tickets", date: "2026-03-22", currency: DEFAULT_CURRENCY },
  { id: "13", type: "income", amount: 4500, category: "Salary", description: "Monthly salary", date: "2026-02-01", currency: DEFAULT_CURRENCY },
  { id: "14", type: "expense", amount: 1200, category: "Housing", description: "Monthly rent", date: "2026-02-01", currency: DEFAULT_CURRENCY },
  { id: "15", type: "expense", amount: 280, category: "Food", description: "Groceries", date: "2026-02-09", currency: DEFAULT_CURRENCY },
  { id: "16", type: "income", amount: 600, category: "Freelance", description: "Logo design", date: "2026-02-14", currency: DEFAULT_CURRENCY },
  { id: "17", type: "expense", amount: 90, category: "Transport", description: "Monthly transit pass", date: "2026-02-02", currency: DEFAULT_CURRENCY },
  { id: "18", type: "expense", amount: 180, category: "Shopping", description: "Clothing", date: "2026-02-20", currency: DEFAULT_CURRENCY },
  { id: "19", type: "income", amount: 4500, category: "Salary", description: "Monthly salary", date: "2026-01-01", currency: DEFAULT_CURRENCY },
  { id: "20", type: "expense", amount: 1200, category: "Housing", description: "Monthly rent", date: "2026-01-01", currency: DEFAULT_CURRENCY },
  { id: "21", type: "expense", amount: 400, category: "Food", description: "Groceries + holiday food", date: "2026-01-10", currency: DEFAULT_CURRENCY },
  { id: "22", type: "income", amount: 300, category: "Gifts", description: "Holiday gift money", date: "2026-01-05", currency: DEFAULT_CURRENCY },
  { id: "23", type: "expense", amount: 250, category: "Entertainment", description: "Holiday events", date: "2026-01-15", currency: DEFAULT_CURRENCY },
];

export function generateId(): string {
  return Math.random().toString(36).slice(2, 9);
}
