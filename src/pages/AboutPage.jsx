function AboutPage() {
  return (
    <section className="oliva-inner-page mx-auto max-w-5xl px-5 py-16 md:py-24">
      <p className="text-sm font-bold uppercase tracking-widest text-[#536b4c]">About us</p>
      <h1 className="mt-3 text-4xl font-serif text-[#29382e] md:text-5xl">Wellness, inspired by the Mediterranean.</h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-[#6c7469]">
        OLIVA is a frontend university project that demonstrates how a personal wellness application can help users record everyday habits. It focuses on a clean interface, simple interactions, and progress information that is easy to understand.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <InfoCard number="01" title="Simple" text="Enter daily information without complicated steps." />
        <InfoCard number="02" title="Personal" text="Your entries stay in this browser using LocalStorage." />
        <InfoCard number="03" title="Clear" text="View your activity with progress bars and summaries." />
      </div>
    </section>
  );
}
