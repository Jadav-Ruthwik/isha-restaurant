import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid items-center gap-12 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
      <div className="max-w-xl">
        <p className="mb-5 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold tracking-wide text-amber-800">
          Fresh flavours, made with care
        </p>
        <h1 className="text-5xl font-bold leading-[1.06] tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
          Food your heart will come back for.
        </h1>
        <p className="mt-6 max-w-md text-lg leading-8 text-stone-600">
          Restaurant-quality favourites, ready for dine-in, takeaway, or home
          delivery.
        </p>
        <a
          href="#menu"
          className="mt-8 inline-flex items-center rounded-full bg-amber-500 px-6 py-3 font-semibold text-white shadow-lg shadow-amber-500/25 transition hover:-translate-y-0.5 hover:bg-amber-600"
        >
          Explore the menu
        </a>
      </div>

      <div className="relative mx-auto w-full max-w-2xl py-6 sm:py-10">
        <div className="absolute inset-x-4 bottom-2 top-2 -rotate-3 rounded-[3rem_7rem_3rem_7rem] bg-amber-200/70" />
        <div className="relative overflow-hidden rounded-[3rem_7rem_3rem_7rem] shadow-2xl shadow-stone-900/20">
          <Image
            src="/Food.png"
            alt="Exterior of Isha Restaurant at night"
            width={1200}
            height={900}
            priority
            className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white sm:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200">
              Isha Restaurant
            </p>
            <p className="mt-2 text-xl font-semibold">A table full of comfort.</p>
          </div>
        </div>
        <div className="absolute -bottom-1 -right-1 rounded-3xl border border-white/70 bg-white/90 px-5 py-4 shadow-xl backdrop-blur sm:right-5">
          <p className="text-sm font-semibold text-stone-900">Dine In · Takeaway</p>
          <p className="mt-1 text-sm text-stone-500">Home delivery available</p>
        </div>
      </div>
    </section>
  );
}
