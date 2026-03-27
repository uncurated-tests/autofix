"use client";

import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { useFinance } from "@/context/FinanceContext";
import { CATEGORIES } from "@/lib/data";
import StatCard from "@/components/StatCard";

const MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function fmt(n: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

export default function DashboardPage() {
  const { transactions } = useFinance();

  const { totalIncome, totalExpenses, balance, monthlySummary, expenseByCategory } = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    let totalIncome = 0;
    let totalExpenses = 0;

    const monthMap: Record<string, { income: number; expenses: number }> = {};
    for (let i = 5; i >= 0; i--) {
      const d = new Date(currentYear, currentMonth - i, 1);
      const key = `${d.getFullYear()}-${d.getMonth()}`;
      monthMap[key] = { income: 0, expenses: 0 };
    }

    const catMap: Record<string, number> = {};

    for (const t of transactions) {
      const d = new Date(t.date);
      const key = `${d.getFullYear()}-${d.getMonth()}`;

      if (d.getFullYear() === currentYear && d.getMonth() === currentMonth) {
        if (t.type === "income") totalIncome += t.amount;
        else {
          totalExpenses += t.amount;
          catMap[t.category] = (catMap[t.category] ?? 0) + t.amount;
        }
      }

      if (monthMap[key]) {
        if (t.type === "income") monthMap[key].income += t.amount;
        else monthMap[key].expenses += t.amount;
      }
    }

    const monthlySummary = Object.entries(monthMap).map(([key, val]) => {
      const [year, month] = key.split("-").map(Number);
      return { month: MONTH_LABELS[month], ...val };
    });

    const expenseByCategory = Object.entries(catMap)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);

    return { totalIncome, totalExpenses, balance: totalIncome - totalExpenses, monthlySummary, expenseByCategory };
  }, [transactions]);

  const getCategoryColor = (name: string) =>
    CATEGORIES.find((c) => c.name === name)?.color ?? "#94a3b8";

  const recentTransactions = transactions.slice(0, 5);

  return (
    <div className="space-y-8 max-w-6xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-500 mt-1">Overview for this month</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Total Income" value={fmt(totalIncome)} color="green" />
        <StatCard label="Total Expenses" value={fmt(totalExpenses)} color="red" />
        <StatCard
          label="Balance"
          value={fmt(balance)}
          sub={balance >= 0 ? "You're in the black" : "You're overspending"}
          color={balance >= 0 ? "blue" : "red"}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Income vs Expenses (6 months)</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={monthlySummary} margin={{ top: 0, right: 0, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v}`} />
              <Tooltip formatter={(v) => fmt(Number(v))} />
              <Legend />
              <Bar dataKey="income" fill="#22c55e" radius={[4, 4, 0, 0]} name="Income" />
              <Bar dataKey="expenses" fill="#f97316" radius={[4, 4, 0, 0]} name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-sm font-semibold text-gray-700 mb-4">Expenses by Category (this month)</h2>
          {expenseByCategory.length === 0 ? (
            <p className="text-sm text-gray-400 mt-16 text-center">No expense data</p>
          ) : (
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={expenseByCategory}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {expenseByCategory.map((entry) => (
                    <Cell key={entry.name} fill={getCategoryColor(entry.name)} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => fmt(Number(v))} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-5">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">Recent Transactions</h2>
        {recentTransactions.length === 0 ? (
          <p className="text-sm text-gray-400">No transactions yet.</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {recentTransactions.map((t) => (
              <li key={t.id} className="flex items-center justify-between py-3">
                <div>
                  <p className="text-sm font-medium text-gray-800">{t.description}</p>
                  <p className="text-xs text-gray-400">{t.category} · {t.date}</p>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    t.type === "income" ? "text-emerald-600" : "text-red-500"
                  }`}
                >
                  {t.type === "income" ? "+" : "-"}{fmt(t.amount)}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
