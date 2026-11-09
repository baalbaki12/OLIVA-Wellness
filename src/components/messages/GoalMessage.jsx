// Show a congratulations message when a daily goal is reached.
function GoalMessage({ data, goals }) {
  const achieved = [];

  if (data.water >= goals.water) achieved.push("Water");
  if (data.steps >= goals.steps) achieved.push("Steps");
  if (data.sleep >= goals.sleep) achieved.push("Sleep");

  if (achieved.length === 0) return null;

  return (
    <div className="goal-message mt-7" role="status" aria-live="polite">
      <p className="goal-message-label">YOUR DAILY ACHIEVEMENTS</p>
      <h2>Great job! You reached {achieved.length === 3 ? "all your goals!" : "a daily goal!"}</h2>
      <p>Keep up your healthy habits. Small steps make a difference.</p>
      <div className="goal-message-items">
        {achieved.map(goal => <span key={goal}>{goal} goal achieved</span>)}
      </div>
    </div>
  );
}
