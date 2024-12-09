import { HomeFillIcon } from "@primer/octicons-react";
import Link from "next/link";

const Navbar = () => {
  const navItem = [
    { path: "/about", text: "about" },
    { path: "/contact", text: "contact" },
    { path: "/pricing", text: "pricing" },
  ];

  return (
    <nav className="bg-blue-500 p-4 flex justify-between text-white">
      <div>
        <Link href="/" className="px-2 py-3 rounded hover:bg-blue-400">
          <HomeFillIcon className="" size={16} />
          <span className="px-2">Home</span>
        </Link>
      </div>
      <div>
        {navItem.map((nav) => (
          <Link
            key={nav.path}
            className="px-2 py-3 rounded hover:bg-blue-400"
            href={nav.path}
          >
            {nav.text}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
