function MoodTracker({ mood, setMood }) {
  const moods = ["Happy", "Calm", "Okay", "Tired", "Stressed"];

  return (
    <section className="rounded-3xl border border-[#e4dfd2] bg-[#fffdf8] p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-[#9a684b]">How are you feeling?</p>
      <h2 className="mt-2 font-serif text-2xl text-[#29382e]">Mood tracker</h2>
      <p className="mt-2 text-sm text-[#6c7469]">Choose the mood that best describes your day.</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {moods.map(item => (
          <button key={item} type="button" onClick={() => setMood(item)}
            aria-pressed={mood === item}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${mood === item ? "border-[#536b4c] bg-[#536b4c] text-white" : "border-[#d9d3c4] text-[#536b4c] hover:bg-[#e9e8d9]"}`}>
            {item}
          </button>
        ))}
      </div>
      <p className="mt-5 text-sm text-[#536b4c]" role="status">
        {mood ? `Today's mood: ${mood}` : "No mood selected yet."}
      </p>
    </section>
  );
}
