function DashboardPage(props) {
  const { data, waterInput, setWaterInput, stepsInput, setStepsInput,
    sleepInput, setSleepInput, addWater, saveSteps, saveSleep, resetData,
    goals, setGoals, mood, setMood } = props;

  return (
    <section className="oliva-dashboard mx-auto max-w-7xl px-5 py-12 md:py-16">
      <div className="dashboard-heading flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-[#536b4c]">Your personal space</p>
          <h1 className="mt-2 text-4xl font-serif text-[#29382e]">Your daily rituals</h1>
          <p className="mt-3 text-[#6c7469]">Enter your daily activity. Your information saves in this browser.</p>
        </div>
        <button onClick={resetData} className="self-start rounded-xl border border-[#d9d3c4] px-4 py-2 text-sm font-semibold text-[#6c7469] hover:bg-[#fffdf8] sm:self-auto">
          Reset today's values
        </button>
      </div>

      <div className="mt-9 grid gap-5 md:grid-cols-3">
        <StatCard title="Water intake" value={`${data.water.toFixed(1)} L`} goal={`Goal: ${goals.water} L`} color="text-sky-600" />
        <StatCard title="Daily steps" value={data.steps.toLocaleString()} goal={`Goal: ${goals.steps.toLocaleString()} steps`} color="text-[#536b4c]" />
        <StatCard title="Sleep" value={`${data.sleep} hrs`} goal={`Goal: ${goals.sleep} hours`} color="text-violet-600" />
      </div>

      <GoalMessage data={data} goals={goals} />
      <WaterAlert data={data} goals={goals} />
      <StepsMessage data={data} stepsUpdated={props.stepsUpdated} />

      <div className="tracker-grid mt-8 grid gap-6 lg:grid-cols-3">
        <WaterTracker data={data} waterInput={waterInput} setWaterInput={setWaterInput} addWater={addWater} goals={goals} />
        <StepsTracker data={data} stepsInput={stepsInput} setStepsInput={setStepsInput} saveSteps={saveSteps} goals={goals} />
        <SleepTracker data={data} sleepInput={sleepInput} setSleepInput={setSleepInput} saveSleep={saveSleep} goals={goals} />
      </div>

      <div className="extra-grid mt-8 grid gap-6 lg:grid-cols-2">
        <MoodTracker mood={mood} setMood={setMood} />
        <CustomGoals goals={goals} setGoals={setGoals} />
      </div>

      <p className="mt-6 rounded-3xl bg-[#e9e8d9] p-4 text-sm leading-6 text-[#40563b]">
        Your entries are stored in your browser with LocalStorage. They are not sent to a server.
      </p>
    </section>
  );
}
