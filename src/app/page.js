import Link from "next/link";
import Image from "next/image";
// (remove ProductCard import unless you actually use it)


// --- Data (swap with real items later) ---
const products = [
  { id: 1, title: "Smiley Dangle Earrings", price: 15, img: "/images/table1.png", badge: "Handmade" },
  { id: 2, title: "Clay Charm Set", price: 22, img: "/images/table2.png", badge: "New" },
  { id: 3, title: "Mini Trinket Tray", price: 18, img: "/images/table3.png", badge: "Best Seller" },
];

const events = [
  { date: "Jul 27", name: "Cleveland Flea Market", city: "Cleveland, OH" },
  { date: "Aug 10", name: "Akron Handmade Fair", city: "Akron, OH" },
  { date: "Aug 24", name: "Lakewood Art Walk", city: "Lakewood, OH" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            PopUp Trinkets
          </Link>
          <nav className="hidden gap-6 sm:flex">
            <Link href="#shop" className="hover:text-amber-700">Shop</Link>
            <Link href="#events" className="hover:text-amber-700">Events</Link>
            <Link href="#about" className="hover:text-amber-700">About</Link>
            <Link href="#contact" className="hover:text-amber-700">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-amber-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(250,204,21,0.35),transparent)]" />
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
            Handmade Trinkets from the Heart
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-700">
            One-of-a-kind finds, made with love and popping up near you.
          </p>
          <div className="mt-8">
            <Link
              href="#shop"
              className="inline-block rounded-full bg-amber-400 px-6 py-3 font-semibold text-white shadow hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              See Products
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-center text-3xl font-bold">Featured Items</h3>
        <p className="mt-2 text-center text-gray-600">Small-batch goods—when they’re gone, they’re gone.</p>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p, i) => (
            <article key={p.id} className="overflow-hidden rounded-xl border shadow-sm ring-1 ring-gray-100 transition hover:shadow-md">
              <div className="relative w-full aspect-square">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                {p.badge && (
                  <span className="absolute left-2 top-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-amber-700 shadow">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="px-4 pb-4 pt-3 text-center">
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="mt-1 text-gray-600">${p.price.toFixed(2)}</p>
                <div className="mt-4 flex justify-center gap-3">
                  <Link
                    href="#contact"
                    className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
                  >
                    DM to Buy
                  </Link>
                  <Link
                    href="#events"
                    className="rounded-md px-4 py-2 text-sm font-medium ring-1 ring-gray-300 hover:ring-amber-500"
                  >
                    Find at Pop-Up
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="#contact" className="text-amber-700 underline hover:text-amber-800">
            Need a custom piece?
          </Link>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h3 className="text-center text-3xl font-bold">Upcoming Pop-Ups</h3>
          <p className="mt-2 text-center text-gray-600">Come say hi and shop in person.</p>

          <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-4">
            {events.map((e) => (
              <li key={e.name} className="flex items-center justify-between rounded-lg border bg-white px-4 py-3 shadow-sm">
                <div className="flex items-center gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-amber-200 font-bold text-amber-800">
                    {e.date}
                  </span>
                  <div>
                    <p className="font-medium">{e.name}</p>
                    <p className="text-sm text-gray-600">{e.city}</p>
                  </div>
                </div>
                <Link href="#contact" className="rounded-md px-3 py-1.5 text-sm ring-1 ring-gray-300 hover:ring-amber-500">
                  Ask details
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="text-center text-3xl font-bold">Our Story</h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-700">
          PopUp Trinkets started as a weekend hobby and quickly grew into a traveling celebration of craft,
          color, and community. Every item is handmade, unique, and full of personality.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-amber-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h3 className="text-3xl font-bold">Stay in Touch</h3>
          <p className="mt-2 text-gray-700">
            Email us at <a href="mailto:popuptrinkets@example.com" className="underline">popuptrinkets@example.com</a> or follow along:
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link href="#" className="rounded-md bg-amber-400 px-5 py-2 font-medium text-white hover:bg-amber-500">
              Instagram
            </Link>
            <Link href="#" className="rounded-md px-5 py-2 font-medium ring-1 ring-gray-300 hover:ring-amber-500">
              Facebook
            </Link>
          </div>

          {/* Simple email capture (mailto for now) */}
          <div className="mx-auto mt-8 max-w-md">
            <form action="mailto:popuptrinkets@example.com" method="post" className="flex overflow-hidden rounded-lg ring-1 ring-gray-300">
              <input
                type="email"
                placeholder="Get restock + pop-up alerts"
                className="w-full px-3 py-2 text-sm outline-none"
                required
              />
              <button type="submit" className="bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800">
                Notify me
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PopUp Trinkets. All rights reserved.
      </footer>
    </main>
  );
}
