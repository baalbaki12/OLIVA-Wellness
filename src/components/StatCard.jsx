function StatCard({ title, value, goal, color }) {
  return (
    <article className="rounded-3xl border border-[#e4dfd2] bg-[#fffdf8] p-6">
      <p className="font-semibold text-[#858778]">{title}</p>
      <p className={`mt-3 text-3xl font-serif ${color}`}>{value}</p>
      <p className="mt-2 text-sm text-[#858778]">{goal}</p>
    </article>
  );
}
