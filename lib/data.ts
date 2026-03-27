import { Category, Transaction } from "./types";

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
  { id: "1", type: "income", amount: 4500, category: "Salary", description: "Monthly salary", date: "2026-03-01" },
  { id: "2", type: "income", amount: 800, category: "Freelance", description: "Web design project", date: "2026-03-05" },
  { id: "3", type: "expense", amount: 1200, category: "Housing", description: "Monthly rent", date: "2026-03-01" },
  { id: "4", type: "expense", amount: 320, category: "Food", description: "Groceries", date: "2026-03-08" },
  { id: "5", type: "expense", amount: 90, category: "Transport", description: "Monthly transit pass", date: "2026-03-02" },
  { id: "6", type: "expense", amount: 60, category: "Entertainment", description: "Streaming subscriptions", date: "2026-03-10" },
  { id: "7", type: "expense", amount: 150, category: "Utilities", description: "Electricity & water", date: "2026-03-12" },
  { id: "8", type: "expense", amount: 200, category: "Shopping", description: "New shoes", date: "2026-03-15" },
  { id: "9", type: "income", amount: 250, category: "Investments", description: "Dividend payout", date: "2026-03-15" },
  { id: "10", type: "expense", amount: 75, category: "Health", description: "Pharmacy", date: "2026-03-18" },
  { id: "11", type: "expense", amount: 45, category: "Food", description: "Restaurant dinner", date: "2026-03-20" },
  { id: "12", type: "expense", amount: 30, category: "Entertainment", description: "Movie tickets", date: "2026-03-22" },
  { id: "13", type: "income", amount: 4500, category: "Salary", description: "Monthly salary", date: "2026-02-01" },
  { id: "14", type: "expense", amount: 1200, category: "Housing", description: "Monthly rent", date: "2026-02-01" },
  { id: "15", type: "expense", amount: 280, category: "Food", description: "Groceries", date: "2026-02-09" },
  { id: "16", type: "income", amount: 600, category: "Freelance", description: "Logo design", date: "2026-02-14" },
  { id: "17", type: "expense", amount: 90, category: "Transport", description: "Monthly transit pass", date: "2026-02-02" },
  { id: "18", type: "expense", amount: 180, category: "Shopping", description: "Clothing", date: "2026-02-20" },
  { id: "19", type: "income", amount: 4500, category: "Salary", description: "Monthly salary", date: "2026-01-01" },
  { id: "20", type: "expense", amount: 1200, category: "Housing", description: "Monthly rent", date: "2026-01-01" },
  { id: "21", type: "expense", amount: 400, category: "Food", description: "Groceries + holiday food", date: "2026-01-10" },
  { id: "22", type: "income", amount: 300, category: "Gifts", description: "Holiday gift money", date: "2026-01-05" },
  { id: "23", type: "expense", amount: 250, category: "Entertainment", description: "Holiday events", date: "2026-01-15" },
];

export function generateId(): string {
  return Math.random().toString(36).slice(2, 9);
}
