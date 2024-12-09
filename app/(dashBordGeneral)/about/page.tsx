import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "about page",
  description: "esta es la pagina de about page",
};

const AboutPage = () => {
  return (
    <div>
      <h2 className="text-2xl">hola desde about</h2>
    </div>
  );
};

export default AboutPage;
