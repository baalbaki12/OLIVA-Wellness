function StepsTracker({stepsInput, setStepsInput, saveSteps, data, goals}) {
  return (
    <form onSubmit={saveSteps} className="rounded-3xl border border-[#e4dfd2] bg-[#fffdf8] p-6">
          <div className="text-3xl">Steps</div>
          <h2 className="mt-3 text-xl font-bold">Update steps</h2>
          <p className="mt-2 text-sm leading-6 text-[#858778]">Enter your current total step count.</p>
          <label className="mt-5 block text-sm font-semibold" htmlFor="steps">Number of steps</label>
          <input id="steps" type="number" min="0" step="1" required value={stepsInput}
            onChange={event => setStepsInput(event.target.value)}
            className="mt-2 w-full rounded-3xl border border-[#d9d3c4] px-4 py-3" />
          <button className="mt-4 w-full rounded-3xl bg-[#536b4c] px-4 py-3 font-bold text-white hover:bg-[#40563b]">Save steps</button>
          <div className="mt-5"><MiniProgress title="Daily goal" value={`${Math.min(100, data.steps / goals.steps * 100).toFixed(0)}%`} percent={data.steps / goals.steps * 100} color="bg-[#71815e]" /></div>
        </form>
  );
}
