interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  color?: "green" | "red" | "blue" | "gray";
}

const colorMap = {
  green: "text-emerald-600 bg-emerald-50 border-emerald-200",
  red: "text-red-600 bg-red-50 border-red-200",
  blue: "text-blue-600 bg-blue-50 border-blue-200",
  gray: "text-gray-600 bg-gray-50 border-gray-200",
};

export default function StatCard({ label, value, sub, color = "gray" }: StatCardProps) {
  return (
    <div className={`rounded-xl border p-5 ${colorMap[color]}`}>
      <p className="text-sm font-medium opacity-70">{label}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
      {sub && <p className="text-xs mt-1 opacity-60">{sub}</p>}
    </div>
  );
}
