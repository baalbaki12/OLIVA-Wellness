function StepsMessage({ data, stepsUpdated }) {
  return (
    stepsUpdated ? (
        <div role="status" aria-live="polite" className="mt-7 rounded-3xl border border-[#b9c7a9] bg-[#eef2e6] p-5 text-[#344b37]">
          <p className="text-xs font-bold uppercase tracking-widest text-[#71815e]">Your movement motivation</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold">
            {data.steps >= 10000 ? "Goal achieved! You crushed it today!" :
             data.steps >= 7500 ? "You're getting stronger with every step!" :
             data.steps >= 5000 ? "Halfway to your goal. You're doing great!" :
             data.steps >= 2500 ? "You're building momentum. Don't stop now!" :
             "Every step is a win. Keep going!"}
          </h2>
          <p className="mt-2 text-sm leading-6">
            You've logged {data.steps.toLocaleString()} steps today.
            {data.steps > 10000 ? " Incredible effort! Remember to rest and recover." : " Keep moving at a pace that feels right for you."}
          </p>
        </div>
      ) : null
  );
}
