function ContactPage({ contactSent, setContactSent }) {
  function submitContact(event) {
    event.preventDefault();
    setContactSent(true);
    event.target.reset();
  }

  return (
    <section className="oliva-inner-page mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-[#536b4c]">Get in touch</p>
        <h1 className="mt-3 text-4xl font-serif text-[#29382e]">Say hello to OLIVA.</h1>
        <p className="mt-5 leading-8 text-[#6c7469]">
          Have a question or suggestion about this project? Use the form to try the contact interface.
        </p>
        <p className="mt-8 font-semibold text-[#536b4c]">hello@oliva.example</p>
      </div>

      <form onSubmit={submitContact} className="rounded-3xl border border-[#e4dfd2] bg-[#fffdf8] p-7 shadow-sm">
        <label className="block text-sm font-semibold" htmlFor="name">Your name</label>
        <input id="name" required className="mt-2 mb-5 w-full rounded-3xl border border-[#d9d3c4] px-4 py-3" placeholder="Enter your name" />
        <label className="block text-sm font-semibold" htmlFor="email">Email address</label>
        <input id="email" type="email" required className="mt-2 mb-5 w-full rounded-3xl border border-[#d9d3c4] px-4 py-3" placeholder="you@example.com" />
        <label className="block text-sm font-semibold" htmlFor="message">Message</label>
        <textarea id="message" required rows="5" className="mt-2 w-full rounded-3xl border border-[#d9d3c4] px-4 py-3" placeholder="Write your message"></textarea>
        <button className="mt-5 w-full rounded-3xl bg-[#536b4c] px-5 py-3 font-bold text-white hover:bg-[#40563b]">Send message</button>
        {contactSent && <p role="status" className="mt-4 rounded-xl bg-[#e9e8d9] p-3 text-sm text-[#40563b]">Thank you. The demo form was submitted successfully. No email was sent.</p>}
        <p className="mt-3 text-xs leading-5 text-[#b8bdb0]">This is a frontend demo. The form does not send or store messages.</p>
      </form>
    </section>
  );
}
