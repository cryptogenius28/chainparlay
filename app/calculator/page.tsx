import ParlayCalculator from "@/components/ParlayCalculator";

export const metadata = {
  title: "Parlay calculator — compare combined odds across books | ChainParlay",
  description:
    "Enter your parlay legs once and compare combined odds and payout across crypto sportsbooks side by side.",
};

export default function CalculatorPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="eyebrow">Tool</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-chalk md:text-4xl">
        Build your chain, compare it across books
      </h1>
      <p className="mt-4 max-w-2xl text-sm text-muted md:text-base">
        Enter the odds each book is quoting for the same legs, and see which
        one pays out more on your exact parlay — before you place it
        anywhere.
      </p>
      <div className="mt-10">
        <ParlayCalculator />
      </div>
    </section>
  );
}
