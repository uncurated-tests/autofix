"use client";

import { useFinance } from "@/context/FinanceContext";
import StatCard from "@/components/StatCard";

export default function NetWorthCard() {
  const { transactions } = useFinance();

  const netWorth = transactions.reduce((acc, t) => {
    return t.type === "income" ? acc + t.amount : acc - t.amount;
  }, 0);

  // BUG: StatCard expects value to be a string, but netWorth is a number
  return <StatCard label="Net Worth" value={netWorth} color="blue" />;
}
