const address = "Bhuvanagiri - Gajwel Rd, Pragnapur, Kyasaram, Telangana 502311";
const directionsUrl = "https://maps.app.goo.gl/iZrtHKfbkKpR3G1D9";
const googleDetailsUrl = "https://share.google/GCqiZ4F0yyqY1e8te";

export default function AboutSection() {
  return (
    <section id="about" className="border-t border-amber-100 py-20">
      <div className="grid gap-10 rounded-[2rem] bg-stone-900 p-7 text-stone-100 shadow-2xl shadow-stone-900/15 md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
            About Isha Restaurant
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Made for memorable meals.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-stone-300">
            Enjoy family favourites in a welcoming space, or order the same
            flavours for takeaway and home delivery.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-amber-400 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-300"
            >
              Get directions
            </a>
            <a
              href="tel:09111244255"
              className="rounded-full border border-stone-600 px-5 py-3 font-semibold transition hover:border-stone-400 hover:bg-stone-800"
            >
              Call 091112 44255
            </a>
            <a
              href={googleDetailsUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-stone-600 px-5 py-3 font-semibold transition hover:border-stone-400 hover:bg-stone-800"
            >
              Google reviews & details
            </a>
          </div>
        </div>

        <div className="rounded-3xl bg-white/8 p-6 ring-1 ring-white/10">
          <div className="border-b border-white/10 pb-5">
            <p className="text-2xl font-bold">Isha Restaurant</p>
            <p className="mt-2 text-amber-300">3.9 ★★★★☆ <span className="text-stone-300">180 Google reviews</span></p>
            <p className="mt-2 text-stone-300">₹200–400 · Family restaurant</p>
          </div>

          <dl className="mt-5 space-y-4 text-stone-300">
            <div>
              <dt className="font-semibold text-white">Service options</dt>
              <dd className="mt-1">Outdoor seating · Private dining room · Does not accept reservations</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Address</dt>
              <dd className="mt-1 leading-6">{address}</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Hours</dt>
              <dd className="mt-1">
                Every day · <span className="font-semibold text-emerald-300">11:30 AM–11:30 PM</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
