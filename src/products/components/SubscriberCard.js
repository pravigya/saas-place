import Link from "next/link";

export default function SubscriberCard() {
  reutn(
    <section>
      <div>
        <h4>See All Products</h4>
        <p style={{ fontSize: "1rem" }}>Go back to see the entire catelogue.</p>
      </div>
      <Link href="/products" className="primary button">
        Back to Products
      </Link>
    </section>
  );
}
