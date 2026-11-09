const initialData = { water: 0, steps: 0, sleep: 0 };
const defaultGoals = { water: 2.5, steps: 10000, sleep: 8 };

function readSavedData() {
  try {
    const saved = JSON.parse(localStorage.getItem("oliva-data"));
    return saved ? { ...initialData, ...saved } : initialData;
  } catch (error) { return initialData; }
}

function readSavedGoals() {
  try {
    const saved = JSON.parse(localStorage.getItem("oliva-goals"));
    return saved ? { ...defaultGoals, ...saved } : defaultGoals;
  } catch (error) { return defaultGoals; }
}

function readSavedMood() {
  return localStorage.getItem("oliva-mood") || "";
}
