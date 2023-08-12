import Benefits from "src/pricing/components/Benefits";
import Plans from "src/pricing/components/Plans";
import { stripe } from "src/pricing/utils/stripe";

export default function PricingPage({ plans }) {
  console.log(plans);
  return (
    <div className="grid-halves h-screen-navbar">
      <Plans plans={plans} />
      <Benefits />
    </div>
  );
}

export async function getStaticProps() {
  const { data: prices } = await stripe.prices.list({ limit: 2 });
  const plans = [];

  console.log(plans);

  for (const price of prices) {
    const product = await stripe.products.retrieve(price.product);

    console.log(product);
    plans.push({
      name: product.name,
      id: price.id,
      price: price.unit_amount / 100,
      interval: price.recurring.interval,
    });
    console.log(plans);
  }

  return {
    props: {
      plans,
    },
  };
}
