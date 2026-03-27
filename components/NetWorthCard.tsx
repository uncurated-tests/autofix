"use client";

import { useFinance } from "@/context/FinanceContext";
import StatCard from "@/components/StatCard";

export default function NetWorthCard() {
  const { transactions } = useFinance();

  const netWorth = transactions.reduce((acc, t) => {
    return t.type === "income" ? acc + t.amount : acc - t.amount;
  }, 0);

  const formatted = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(netWorth);
  return <StatCard label="Net Worth" value={formatted} color="blue" />;
}
