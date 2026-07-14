const steps = [
  {
    number: "01",
    title: "Choose your favourites",
    description: "Add items to your cart and choose Home Delivery as the order type.",
  },
  {
    number: "02",
    title: "Send your WhatsApp order",
    description: "Your selected items and total are sent to Isha Restaurant on WhatsApp.",
  },
  {
    number: "03",
    title: "Wait for confirmation",
    description: "We confirm your order and whether your address is within our delivery area.",
  },
  {
    number: "04",
    title: "Share your location",
    description: "After we confirm the order, share your live location on WhatsApp for delivery.",
  },
];

export default function DeliverySection() {
  return (
    <section id="delivery" className="py-20">
      <div className="rounded-[2rem] bg-amber-50 px-7 py-12 sm:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
              Home delivery
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              Good food, delivered nearby.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-8 text-stone-600">
              We deliver within a 10 km radius of Isha Restaurant. To protect
              your privacy, we request your location only after your WhatsApp
              order is confirmed.
            </p>

            <div className="relative mx-auto mt-9 flex aspect-square w-56 items-center justify-center rounded-full border-2 border-dashed border-amber-400 bg-amber-100/70 sm:mx-0">
              <div className="absolute inset-5 rounded-full border border-amber-300" />
              <div className="relative rounded-full bg-stone-900 px-5 py-4 text-center text-sm font-semibold text-white shadow-lg">
                Isha Restaurant
                <span className="mt-1 block text-amber-300">10 km delivery radius</span>
              </div>
            </div>
          </div>

          <ol className="grid gap-4 sm:grid-cols-2">
            {steps.map((step) => (
              <li key={step.number} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-amber-100">
                <span className="text-sm font-bold text-amber-600">{step.number}</span>
                <h3 className="mt-3 text-xl font-bold text-stone-900">{step.title}</h3>
                <p className="mt-2 leading-6 text-stone-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
