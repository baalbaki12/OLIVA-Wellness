function WaterTracker({waterInput, setWaterInput, addWater, data, goals}) {
  return (
    <form onSubmit={addWater} className="rounded-3xl border border-[#e4dfd2] bg-[#fffdf8] p-6">
          <div className="text-3xl">Water</div>
          <h2 className="mt-3 text-xl font-bold">Add water</h2>
          <p className="mt-2 text-sm leading-6 text-[#858778]">Enter the amount you drank in liters.</p>
          <label className="mt-5 block text-sm font-semibold" htmlFor="water">Amount (liters)</label>
          <input id="water" type="number" min="0.1" step="0.1" required value={waterInput}
            onChange={event => setWaterInput(event.target.value)}
            className="mt-2 w-full rounded-3xl border border-[#d9d3c4] px-4 py-3" />
          <button className="mt-4 w-full rounded-3xl bg-[#536b4c] px-4 py-3 font-bold text-white hover:bg-[#40563b]">Add water</button>
          <div className="mt-5"><MiniProgress title="Daily goal" value={`${Math.min(100, data.water / goals.water * 100).toFixed(0)}%`} percent={data.water / goals.water * 100} color="bg-[#7397a2]" /></div>
        </form>
  );
}
