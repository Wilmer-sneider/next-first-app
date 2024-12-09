import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact page",
  description: "esta es la pagina de contact",
};

const ContactPage = () => {
  return (
    <div>
      <h2>hola desde contact</h2>
    </div>
  );
};

export default ContactPage;
