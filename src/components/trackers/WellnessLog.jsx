function WellnessLog({ entries, setEntries, activityHistory }) {
  const [meal, setMeal] = React.useState("");
  const [mealType, setMealType] = React.useState("Breakfast");
  const [exercise, setExercise] = React.useState("");
  const [minutes, setMinutes] = React.useState("");
  const today = new Date().toLocaleDateString('en-CA');
  const add = (event, kind) => {
    event.preventDefault();
    const name = (kind === 'meal' ? meal : exercise).trim();
    if (!name || (kind === 'exercise' && !(Number(minutes) > 0))) return;
    setEntries(previous => [{ id: Date.now().toString() + Math.random(), date: today, kind, name, ...(kind === 'meal' ? { mealType } : { minutes: Number(minutes) }) }, ...previous]);
    if (kind === 'meal') setMeal(''); else { setExercise(''); setMinutes(''); }
  };
  const remove = id => setEntries(previous => previous.filter(item => item.id !== id));
  const recent = [...activityHistory].sort((a,b) => b.date.localeCompare(a.date)).slice(0,7).reverse();
  const maxSteps = Math.max(1,...recent.map(day => day.steps || 0));
  return <div className="mt-9 space-y-6">
    <div><p className="text-sm font-bold uppercase tracking-widest text-[#536b4c]">Your wellness journal</p><h2 className="mt-2 font-serif text-3xl">Meals, movement & progress</h2><p className="mt-2 text-[#6c7469]">Keep a simple record of your everyday habits.</p></div>
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-3xl p-6"><h3 className="font-serif text-2xl mb-4">Meal journal</h3>
        <form onSubmit={e => add(e,'meal')} className="space-y-3 !border-0 !shadow-none !bg-transparent !p-0">
          <label className="block text-sm font-semibold" htmlFor="meal-type">Meal</label><select id="meal-type" value={mealType} onChange={e=>setMealType(e.target.value)} className="w-full rounded-xl border border-[#d5c6a7] bg-[#fffaf0] p-3"><option>Breakfast</option><option>Lunch</option><option>Dinner</option><option>Snack</option></select>
          <label className="block text-sm font-semibold" htmlFor="meal-name">What did you eat?</label><input id="meal-name" required maxLength="120" value={meal} onChange={e=>setMeal(e.target.value)} placeholder="e.g. Eggs and toast" className="w-full rounded-xl p-3"/>
          <button type="submit" className="w-full px-5 py-3 font-semibold">Add meal</button>
        </form></section>
      <section className="rounded-3xl p-6"><h3 className="font-serif text-2xl mb-4">Exercise journal</h3>
        <form onSubmit={e => add(e,'exercise')} className="space-y-3 !border-0 !shadow-none !bg-transparent !p-0">
          <label className="block text-sm font-semibold" htmlFor="exercise-name">Activity</label><input id="exercise-name" required maxLength="120" value={exercise} onChange={e=>setExercise(e.target.value)} placeholder="e.g. Walking or cycling" className="w-full rounded-xl p-3"/>
          <label className="block text-sm font-semibold" htmlFor="exercise-minutes">Duration (minutes)</label><input id="exercise-minutes" type="number" min="1" max="1440" required value={minutes} onChange={e=>setMinutes(e.target.value)} placeholder="30" className="w-full rounded-xl p-3"/>
          <button type="submit" className="w-full px-5 py-3 font-semibold">Add exercise</button>
        </form></section>
    </div>
    <section className="rounded-3xl p-6"><h3 className="font-serif text-2xl mb-4">Your recent entries</h3>
      {entries.length === 0 ? <p className="text-[#6c7469]">No meals or workouts recorded yet. Add your first entry above.</p> : <ul className="space-y-3">{entries.slice(0,30).map(item=><li key={item.id} className="flex items-center justify-between gap-3 border-b border-[#e5dcc9] pb-3"><div><span className="text-xs font-bold uppercase text-[#536b4c]">{item.kind === 'meal' ? item.mealType : 'Exercise'} · {item.date}</span><p className="font-semibold break-words">{item.name}{item.kind === 'exercise' ? ` · ${item.minutes} min` : ''}</p></div><button type="button" aria-label={`Delete ${item.name}`} onClick={()=>remove(item.id)} className="border border-[#d5c6a7] px-3 py-2 text-sm">Delete</button></li>)}</ul>}
    </section>
    <section className="rounded-3xl p-6"><h3 className="font-serif text-2xl mb-2">Daily activity history</h3><p className="text-sm text-[#6c7469] mb-5">Steps recorded on your recent days. Today's values update as you log activity.</p>
      <div className="flex h-44 items-end gap-3" role="img" aria-label="Bar chart showing daily steps over the last seven recorded days">
        {recent.map(day=><div key={day.date} className="flex min-w-0 flex-1 flex-col items-center justify-end gap-2 h-full"><span className="text-xs font-semibold">{day.steps || 0}</span><div className="w-full max-w-16 rounded-t-lg bg-[#78906b]" style={{height:`${Math.max(3,((day.steps||0)/maxSteps)*110)}px`}}></div><span className="text-xs text-[#6c7469]">{day.date.slice(5)}</span></div>)}
      </div>
      <div className="mt-5 space-y-2">{recent.slice().reverse().map(day=><p key={day.date} className="text-sm text-[#596a55]">{day.date}: {Number(day.water||0).toFixed(1)} L water · {day.steps||0} steps · {day.sleep||0} hrs sleep</p>)}</div>
    </section>
  </div>;
}
