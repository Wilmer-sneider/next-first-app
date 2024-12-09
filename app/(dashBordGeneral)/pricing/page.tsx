import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pricing page",
  description: "esta es la pagina de pricing",
};

const PricingPage = () => {
  return (
    <div>
      <h2>hola desde pricing page</h2>
    </div>
  );
};

export default PricingPage;
