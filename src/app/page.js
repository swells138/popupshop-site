import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b shadow-sm">
        <h1 className="text-2xl font-bold">PopUp Trinkets</h1>
        <nav className="space-x-4">
          <Link href="#shop" className="hover:underline">Shop</Link>
          <Link href="#events" className="hover:underline">Events</Link>
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-amber-100">
        <h2 className="text-4xl font-extrabold mb-4">Handmade Trinkets from the Heart</h2>
        <p className="text-lg text-gray-600 mb-6">One-of-a-kind finds, made with love and popping up near you.</p>
        <a href="#shop" className="bg-amber-400 hover:bg-amber-500 text-white px-6 py-3 rounded-full font-semibold">See Products</a>
      </section>

      {/* Product Section */}
      <section id="shop" className="py-16 px-6">
        <h3 className="text-3xl font-bold mb-8 text-center">Featured Items</h3>
        <div className="grid md:grid-cols-3 gap-8">

          <div className="border rounded-lg shadow p-4 text-center">
            <Image src="/item1.svg" alt={`Item 1`} width={300} height={300} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Item 1</h4>
            <p className="text-gray-600">Short description here.</p>
            <p className="mt-2 font-bold">$15.00</p>
          </div>
          <div className="border rounded-lg shadow p-4 text-center">
            <Image src="/item2.svg" alt={`Item 2`} width={300} height={300} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Item 2</h4>
            <p className="text-gray-600">Short description here.</p>
            <p className="mt-2 font-bold">$15.00</p>
          </div>
          <div className="border rounded-lg shadow p-4 text-center">
            <Image src="/item3.svg" alt={`Item 3`} width={300} height={300} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold">Item 3</h4>
            <p className="text-gray-600">Short description here.</p>
            <p className="mt-2 font-bold">$15.00</p>
          </div>

        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-gray-100 py-16 px-6">
        <h3 className="text-3xl font-bold mb-6 text-center">Upcoming Pop-Ups</h3>
        <ul className="max-w-xl mx-auto space-y-4 text-center">
          <li>🌟 July 27 - Cleveland Flea Market</li>
          <li>🌟 August 10 - Akron Handmade Fair</li>
          <li>🌟 August 24 - Lakewood Art Walk</li>
        </ul>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <h3 className="text-3xl font-bold mb-4 text-center">Our Story</h3>
        <p className="max-w-2xl mx-auto text-center text-gray-700">
          PopUp Trinkets started as a weekend hobby and quickly grew into a traveling celebration of craft, color, and community. Every item is handmade, unique, and filled with personality.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-amber-100 py-16 px-6">
        <h3 className="text-3xl font-bold mb-4 text-center">Stay in Touch</h3>
        <p className="text-center text-gray-700 mb-6">Follow us on socials or email us at <a href="mailto:popuptrinkets@example.com" className="underline">popuptrinkets@example.com</a></p>
        <div className="text-center space-x-4">
          <a href="#" className="text-lg font-semibold hover:underline">Instagram</a>
          <a href="#" className="text-lg font-semibold hover:underline">Facebook</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} PopUp Trinkets. All rights reserved.
      </footer>
    </main>
  );
}

