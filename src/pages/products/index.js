import ProductCard from "src/products/components/Card";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default function ProductsPage({ products }) {
  return (
    <>
      <div className="section bg-blue">
        <div className="container">
          <div className="section-intro">
            <h1>The latest Products</h1>
          </div>
        </div>
      </div>

      <div className="section small">
        <div className="container">
          <ul className="product-card-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  let { data: products } = await supabase.from("product").select("*");

  return {
    props: { products },
  };
}
