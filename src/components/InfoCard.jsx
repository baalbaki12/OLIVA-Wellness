function InfoCard({ number, title, text }) {
  return (
    <article className="rounded-3xl border border-[#e4dfd2] bg-[#fffdf8] p-6">
      <p className="text-sm font-serif text-[#536b4c]">{number}</p>
      <h2 className="mt-4 text-xl font-bold text-slate-900">{title}</h2>
      <p className="mt-2 leading-7 text-[#6c7469]">{text}</p>
    </article>
  );
}
