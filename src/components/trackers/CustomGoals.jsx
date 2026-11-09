function CustomGoals({ goals, setGoals }) {
  const [water, setWater] = React.useState(String(goals.water));
  const [steps, setSteps] = React.useState(String(goals.steps));
  const [sleep, setSleep] = React.useState(String(goals.sleep));
  const [saved, setSaved] = React.useState(false);

  function saveGoals(event) {
    event.preventDefault();
    const newWater = Number(water);
    const newSteps = Number(steps);
    const newSleep = Number(sleep);
    if (newWater <= 0 || newSteps <= 0 || newSleep <= 0 || newSleep > 24) return;
    setGoals({ water: newWater, steps: newSteps, sleep: newSleep });
    setSaved(true);
  }

  return (
    <form onSubmit={saveGoals} className="rounded-3xl border border-[#e4dfd2] bg-[#fffdf8] p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-[#9a684b]">Your personal targets</p>
      <h2 className="mt-2 font-serif text-2xl text-[#29382e]">Custom daily goals</h2>
      <p className="mt-2 text-sm text-[#6c7469]">Adjust your tracking goals to suit your routine.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <label className="text-sm font-semibold">Water (L)
          <input type="number" min="0.1" max="20" step="0.1" required value={water} onChange={e => { setWater(e.target.value); setSaved(false); }} className="mt-2 w-full rounded-xl border border-[#d9d3c4] p-3" />
        </label>
        <label className="text-sm font-semibold">Steps
          <input type="number" min="1" max="100000" step="1" required value={steps} onChange={e => { setSteps(e.target.value); setSaved(false); }} className="mt-2 w-full rounded-xl border border-[#d9d3c4] p-3" />
        </label>
        <label className="text-sm font-semibold">Sleep (hrs)
          <input type="number" min="0.5" max="24" step="0.5" required value={sleep} onChange={e => { setSleep(e.target.value); setSaved(false); }} className="mt-2 w-full rounded-xl border border-[#d9d3c4] p-3" />
        </label>
      </div>
      <button type="submit" className="mt-5 rounded-full bg-[#536b4c] px-6 py-3 font-semibold text-white hover:bg-[#40563b]">Save my goals</button>
      {saved && <p role="status" className="mt-3 text-sm text-[#536b4c]">Your goals were saved.</p>}
      <p className="mt-3 text-xs leading-5 text-[#858778]">These are personal tracking targets, not medical recommendations. Going over a water goal is not automatically unsafe.</p>
    </form>
  );
}
