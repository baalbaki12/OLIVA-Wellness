function FeaturesPage({ navigate }) {
  const features = [
    ["Water intake", "Record how much water you drink during the day.", "01"],
    ["Daily steps", "Save your step count and compare it with your daily goal.", "02"],
    ["Sleep hours", "Record your sleep duration and work toward a regular routine.", "03"],
    ["Progress overview", "See your saved values and progress toward each daily goal.", "04"],
    ["Local data storage", "Your entries remain available in the same browser after refreshing.", "05"],
    ["Responsive layout", "Use the application on desktop, tablet, and mobile screens.", "06"]
  ];
  return (
    <section className="oliva-inner-page mx-auto max-w-7xl px-5 py-16 md:py-20">
      <p className="text-sm font-bold uppercase tracking-widest text-[#536b4c]">What you can do</p>
      <h1 className="mt-3 text-4xl font-serif text-[#29382e]">Simple rituals for a balanced life.</h1>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(item => (
          <article key={item[2]} className="rounded-3xl border border-[#e4dfd2] bg-[#fffdf8] p-7 transition hover:-translate-y-1 hover:shadow-lg">
            <span className="text-sm font-serif text-[#536b4c]">{item[2]}</span>
            <h2 className="mt-5 text-xl font-bold text-slate-900">{item[0]}</h2>
            <p className="mt-3 leading-7 text-[#6c7469]">{item[1]}</p>
          </article>
        ))}
      </div>
      <button onClick={() => navigate("Dashboard")} className="mt-10 rounded-3xl bg-[#536b4c] px-6 py-3 font-bold text-white hover:bg-[#40563b]">
        Try the Dashboard
      </button>
    </section>
  );
}
