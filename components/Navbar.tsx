import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Isha Restaurant Logo"
          width={50}
          height={50}
          className="rounded-full"
        />

        <div>
          <h1 className="text-2xl font-bold text-gray-900">Isha Restaurant</h1>

          <p className="text-sm text-gray-500">Dine • Takeaway • Delivery</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="#delivery"
          className="hidden font-semibold text-gray-700 transition hover:text-amber-600 md:block"
        >
          Delivery
        </a>
        <a
          href="#about"
          className="hidden font-semibold text-gray-700 transition hover:text-amber-600 md:block"
        >
          About
        </a>
        <a
          href="#menu"
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-full font-semibold transition"
        >
          Order Now
        </a>
      </div>
    </nav>
  );
}
