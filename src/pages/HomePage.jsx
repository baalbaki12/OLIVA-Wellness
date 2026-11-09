function HomePage({ navigate, data, goals }) {
  return (
    <>
      <section className="oliva-home mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#536b4c]">
            Your health. Your routine.
          </p>
          <h1 className="max-w-2xl text-5xl font-serif leading-tight tracking-tight text-[#29382e] md:text-6xl">
            Make every day a <span className="text-[#536b4c]">healthier</span> day.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6c7469]">
            Keep your wellness habits organized. Track water, daily steps, and sleep in one simple place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={() => navigate("Dashboard")}
              className="rounded-3xl bg-[#536b4c] px-6 py-3.5 font-bold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-[#40563b]">
              Open My Dashboard
            </button>
            <button onClick={() => navigate("Features")}
              className="rounded-3xl border border-[#d9d3c4] bg-[#fffdf8] px-6 py-3.5 font-bold text-[#536253] hover:bg-[#eae8df]">
              Explore Features
            </button>
          </div>
          <div className="mt-10 flex flex-wrap gap-8 text-sm text-[#858778]">
            <div><strong className="block text-2xl text-slate-900">3</strong>Daily habits</div>
            <div><strong className="block text-2xl text-slate-900">1</strong>Simple dashboard</div>
            <div><strong className="block text-2xl text-slate-900">100%</strong>Your own data</div>
          </div>
        </div>

        <div className="hero-art rounded-[2rem] bg-[#e5e8d8] p-5 sm:p-8"><img className="oliva-hero-image" src="./src/assets/mediterranean-landscape.svg" alt="Sunlit Mediterranean greenery" />
          <div className="rounded-3xl bg-[#fffdf8] p-6 shadow-xl shadow-emerald-900/5 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#858778]">YOUR WELLNESS</p>
                <h2 className="mt-1 text-2xl font-serif text-slate-900">Daily overview</h2>
              </div>
              <span className="rounded-full bg-[#e9e8d9] px-3 py-1 text-xs font-bold text-[#536b4c]">LIVE</span>
            </div>
            <div className="mt-8 space-y-6">
              <MiniProgress title="Water" value={`${data.water.toFixed(1)} / ${goals.water} L`} percent={data.water / goals.water * 100} color="bg-[#7397a2]" />
              <MiniProgress title="Steps" value={`${data.steps.toLocaleString()} / ${goals.steps.toLocaleString()}`} percent={data.steps / goals.steps * 100} color="bg-[#71815e]" />
              <MiniProgress title="Sleep" value={`${data.sleep} / ${goals.sleep} hours`} percent={data.sleep / goals.sleep * 100} color="bg-[#bf8e72]" />
            </div>
            <p className="mt-8 rounded-3xl bg-[#f8f6ef] p-4 text-center text-sm text-[#6c7469]">
              Your dashboard updates when you save your daily activity.
            </p>
          </div>
        </div>
      </section>

      <section className="home-bottom border-y border-[#e9e4d8] bg-[#fffdf8] px-5 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#536b4c]">A simpler routine</p>
          <h2 className="mt-3 text-3xl font-serif text-[#29382e]">Small habits. Clear progress.</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-[#6c7469]">
            OLIVA helps you record everyday wellness information and see how your habits change over time.
          </p>
          <button onClick={() => navigate("Dashboard")} className="mt-7 font-bold text-[#536b4c] hover:underline">
            Start tracking your day →
          </button>
        </div>
      </section>
    </>
  );
}
