function Navbar({ page, navigate }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pages = ["Home", "About", "Features", "Dashboard", "Contact"];

  function openPage(name) {
    navigate(name);
    setMenuOpen(false);
  }

  return (
      <header className="oliva-navbar sticky top-0 z-20 border-b border-[#e9e4d8] bg-[#fffdf8]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <button onClick={() => openPage("Home")} className="flex items-center gap-3 text-[#536b4c]" aria-label="OLIVA home">
            <img src="/src/assets/olive-branch.svg" alt="" className="h-11 w-11 rounded-full" />
            <span className="text-2xl font-serif tracking-tight">OLIVA<span className="text-[#c47c55]">.</span></span>
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {pages.map(item => (
              <button key={item} onClick={() => openPage(item)}
                className={`text-sm font-semibold transition hover:text-[#536b4c] ${page === item ? "text-[#536b4c]" : "text-[#6c7469]"}`}>
                {item}
              </button>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl border border-[#e4dfd2] px-3 py-2 text-[#536253] md:hidden"
            aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? "Close" : "Menu"}
          </button>
        </nav>

        {menuOpen && (
          <div className="flex flex-col gap-1 border-t border-[#e9e4d8] bg-[#fffdf8] px-5 py-3 md:hidden">
            {pages.map(item => (
              <button key={item} onClick={() => openPage(item)}
                className="rounded-xl px-3 py-3 text-left font-medium hover:bg-[#e9e8d9]">
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

  );
}
