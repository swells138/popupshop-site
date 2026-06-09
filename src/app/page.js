const products = [
  ["Clay Charm Set", "Hand-shaped charms with warm glaze tones.", "$18", "from-rose-200 via-amber-100 to-teal-100"],
  ["Mini Market Tote", "Small-batch stitched tote for gifts and daily errands.", "$24", "from-lime-200 via-sky-100 to-violet-100"],
  ["Beaded Key Loop", "Colorful wristlet loop with mixed beads and brass hardware.", "$15", "from-fuchsia-200 via-orange-100 to-yellow-100"],
];

const events = [
  ["June 14", "Cleveland Handmade Market", "10 AM - 4 PM"],
  ["June 28", "Lakewood Summer Walk", "12 PM - 6 PM"],
  ["July 12", "Akron Maker Fair", "11 AM - 5 PM"],
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffdf7] text-slate-950 font-sans">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
          <a href="#hero" className="text-xl font-black">PopUp Trinkets</a>
          <nav className="hidden items-center gap-6 text-sm font-bold text-slate-700 sm:flex">
            <a href="#shop" className="hover:text-rose-600">Shop</a>
            <a href="#events" className="hover:text-rose-600">Events</a>
            <a href="#about" className="hover:text-rose-600">About</a>
          </nav>
          <a href="#contact" className="inline-flex min-h-11 items-center rounded-md bg-slate-950 px-4 py-2 text-sm font-bold text-white hover:bg-rose-600">
            Contact
          </a>
        </div>
      </header>

      <section id="hero" className="relative overflow-hidden border-b border-slate-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p className="mb-4 w-fit rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-rose-700">
              Handmade pop-up retail demo
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-6xl">
              A cheerful shop site that turns market traffic into loyal buyers.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Built for makers who need featured products, upcoming pop-ups, custom order notes, and an easy way for customers to stay connected.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#shop" className="inline-flex min-h-12 items-center justify-center rounded-md bg-rose-600 px-6 py-3 font-bold text-white hover:bg-rose-500">
                Browse Featured Items
              </a>
              <a href="#events" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-bold hover:border-rose-400 hover:text-rose-700">
                See Pop-Ups
              </a>
            </div>
          </div>
          <div className="grid min-h-[420px] grid-cols-2 gap-4">
            <div className="rounded-md bg-gradient-to-br from-rose-200 via-amber-100 to-white p-5 shadow-lg">
              <div className="h-full rounded-md border border-white/70 bg-white/55 p-5 backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">Featured</p>
                <p className="mt-12 text-5xl font-black">42</p>
                <p className="mt-2 font-bold text-slate-700">small-batch pieces</p>
              </div>
            </div>
            <div className="mt-12 rounded-md bg-gradient-to-br from-teal-200 via-sky-100 to-white p-5 shadow-lg">
              <div className="h-full rounded-md border border-white/70 bg-white/55 p-5 backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-700">Next stop</p>
                <p className="mt-12 text-3xl font-black">Maker Market</p>
                <p className="mt-2 font-bold text-slate-700">Saturday at 10 AM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-700">Featured items</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Product cards without fragile remote images.</h2>
            <p className="mt-4 leading-7 text-slate-700">These visual cards are dependable, fast, and easy to replace with real product photography later.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map(([name, description, price, gradient]) => (
              <article key={name} className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
                <div className={"aspect-square bg-gradient-to-br " + gradient + " p-6"}>
                  <div className="flex h-full items-center justify-center rounded-md border border-white/80 bg-white/55 text-center text-2xl font-black text-slate-800 shadow-inner backdrop-blur">
                    {name}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black">{name}</h3>
                    <span className="rounded-full bg-rose-50 px-3 py-1 text-sm font-black text-rose-700">{price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-300">Upcoming pop-ups</p>
            <h2 className="mt-3 text-3xl font-black sm:text-5xl">Keep the next stop impossible to miss.</h2>
            <p className="mt-4 leading-7 text-slate-300">The site gives market shoppers a current schedule and a reason to come back after the event.</p>
          </div>
          <div className="grid gap-4">
            {events.map(([date, place, time]) => (
              <div key={date} className="grid gap-2 rounded-md border border-white/10 bg-white/5 p-5 sm:grid-cols-3 sm:items-center">
                <p className="font-black text-rose-200">{date}</p>
                <p className="font-bold">{place}</p>
                <p className="text-slate-300 sm:text-right">{time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
          {["Custom orders", "Gift-ready packaging", "Market pickup"].map((item) => (
            <div key={item} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-black">{item}</h3>
              <p className="mt-3 leading-7 text-slate-600">A compact service block helps visitors understand what makes the shop easier to buy from.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-rose-100 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-rose-700">Stay in touch</p>
          <h2 className="mt-3 text-3xl font-black sm:text-5xl">Invite shoppers to follow, email, or request a custom piece.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700">A small shop demo should make the next step feel personal and low-friction.</p>
          <a href="mailto:popuptrinkets@example.com" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-slate-950 px-7 py-3 font-bold text-white hover:bg-rose-600">
            Email PopUp Trinkets
          </a>
        </div>
      </section>
    </main>
  );
}
