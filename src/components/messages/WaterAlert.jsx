function WaterAlert({ data, goals }) {
  return (
    data.water > goals.water ? (
        <div role="alert" aria-live="polite" className="mt-7 rounded-3xl border border-[#d8a875] bg-[#fff3e6] p-5 text-[#6c452b]">
          <div className="flex items-start gap-3">
            <span aria-hidden="true" className="text-2xl">⚠</span>
            <div>
              <h2 className="font-bold">You've passed your daily water goal</h2>
              <p className="mt-2 text-sm leading-6">
                You've recorded {data.water.toFixed(1)} L, above your {goals.water} L tracking goal.
                This does not necessarily mean you've had too much water: individual needs vary.
                However, drinking excessive water, especially quickly, can be harmful.
                Avoid forcing extra water just to meet a target.
              </p>
              <p className="mt-2 text-xs leading-5">This is a general wellness reminder, not a medical diagnosis or a personal safety limit.</p>
            </div>
          </div>
        </div>
      ) : null
  );
}
