function MiniProgress({ title, value, percent, color }) {
  const safePercent = Math.max(0, Math.min(100, percent || 0));
  return (
    <div>
      <div className="mb-2 flex justify-between gap-3 text-sm">
        <span className="font-semibold text-[#536253]">{title}</span>
        <span className="text-[#858778]">{value}</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-[#eae8df]">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${safePercent}%` }} />
      </div>
    </div>
  );
}
