function SleepTracker({sleepInput, setSleepInput, saveSleep, data, goals}) {
  return (
    <form onSubmit={saveSleep} className="rounded-3xl border border-[#e4dfd2] bg-[#fffdf8] p-6">
          <div className="text-3xl">Sleep</div>
          <h2 className="mt-3 text-xl font-bold">Record sleep</h2>
          <p className="mt-2 text-sm leading-6 text-[#858778]">Enter how many hours you slept.</p>
          <label className="mt-5 block text-sm font-semibold" htmlFor="sleep">Hours slept</label>
          <input id="sleep" type="number" min="0" max="24" step="0.5" required value={sleepInput}
            onChange={event => setSleepInput(event.target.value)}
            className="mt-2 w-full rounded-3xl border border-[#d9d3c4] px-4 py-3" />
          <button className="mt-4 w-full rounded-3xl bg-[#536b4c] px-4 py-3 font-bold text-white hover:bg-[#40563b]">Save sleep</button>
          <div className="mt-5"><MiniProgress title="Daily goal" value={`${Math.min(100, data.sleep / goals.sleep * 100).toFixed(0)}%`} percent={data.sleep / goals.sleep * 100} color="bg-[#bf8e72]" /></div>
        </form>
  );
}
