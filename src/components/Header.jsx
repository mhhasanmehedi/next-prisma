"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Faq",
      href: "/about/faq",
    },
    {
      label: "Posts",
      href: "/posts",
    },
    {
      label: "CRUD",
      href: "/crud",
    },
  ];

  return (
    <div>
      <ul className="container px-4 mx-auto flex gap-5 py-10">
        {navItems.map((link, index) => (
          <li
            key={index}
            className={
              pathname === `${link.href}` ? "text-blue-600 font-bold" : ""
            }
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
