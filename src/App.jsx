const { useEffect, useState } = React;

function App() {
  const todayKey = () => new Date().toLocaleDateString('en-CA');
  const [entries, setEntries] = useState(() => { try { const x=JSON.parse(localStorage.getItem('oliva-journal')); return Array.isArray(x)?x:[]; } catch { return []; } });
  const [history, setHistory] = useState(() => { try { const x=JSON.parse(localStorage.getItem('oliva-history')); return x && typeof x==='object' && !Array.isArray(x)?x:{}; } catch { return {}; } });
  const [page, setPage] = useState("Home");
  const [data, setData] = useState(readSavedData);
  const [goals, setGoals] = useState(readSavedGoals);
  const [mood, setMood] = useState(readSavedMood);
  const [waterInput, setWaterInput] = useState("1");
  const [stepsInput, setStepsInput] = useState("");
  const [stepsUpdated, setStepsUpdated] = useState(false);
  const [sleepInput, setSleepInput] = useState("");
  const [contactSent, setContactSent] = useState(false);

  useEffect(() => {
    localStorage.setItem("oliva-data", JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem("oliva-goals", JSON.stringify(goals));
  }, [goals]);

  useEffect(() => {
    localStorage.setItem("oliva-mood", mood);
  }, [mood]);

  useEffect(() => { localStorage.setItem('oliva-journal', JSON.stringify(entries)); }, [entries]);
  useEffect(() => { localStorage.setItem('oliva-history', JSON.stringify(history)); }, [history]);
  useEffect(() => { setHistory(previous => ({...previous, [todayKey()]: {...data, date: todayKey()}})); }, [data]);

  function navigate(nextPage) {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function addWater(event) {
    event.preventDefault();
    const amount = Number(waterInput);
    if (amount > 0) {
      setData(previous => ({ ...previous, water: previous.water + amount }));
      setWaterInput("1");
    }
  }

  function saveSteps(event) {
    event.preventDefault();
    const amount = Number(stepsInput);
    if (amount >= 0) {
      setData(previous => ({ ...previous, steps: amount }));
      setStepsUpdated(true);
      setStepsInput("");
    }
  }

  function saveSleep(event) {
    event.preventDefault();
    const amount = Number(sleepInput);
    if (amount >= 0 && amount <= 24) {
      setData(previous => ({ ...previous, sleep: amount }));
      setSleepInput("");
    }
  }

  return (
    <div className="oliva-app min-h-screen bg-[#f8f6ef] text-[#29382e]">
      <Navbar page={page} navigate={navigate} />

      <main className="page-enter" key={page}>
        {page === "Home" && <HomePage navigate={navigate} data={data} goals={goals} />}
        {page === "About" && <AboutPage />}
        {page === "Features" && <FeaturesPage navigate={navigate} />}
        {page === "Dashboard" && (
          <DashboardPage
            data={data}
            entries={entries}
            setEntries={setEntries}
            activityHistory={Object.values(history).sort((a,b)=>a.date.localeCompare(b.date))}
            goals={goals}
            setGoals={setGoals}
            mood={mood}
            setMood={setMood}
            waterInput={waterInput}
            setWaterInput={setWaterInput}
            stepsInput={stepsInput}
            setStepsInput={setStepsInput}
            sleepInput={sleepInput}
            setSleepInput={setSleepInput}
            addWater={addWater}
            saveSteps={saveSteps}
            stepsUpdated={stepsUpdated}
            saveSleep={saveSleep}
            resetData={() => { setData(initialData); setStepsUpdated(false); }}
          />
        )}
        {page === "Contact" && (
          <ContactPage contactSent={contactSent} setContactSent={setContactSent} />
        )}
      </main>

      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
