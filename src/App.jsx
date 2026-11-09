const { useEffect, useState } = React;

function App() {
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
