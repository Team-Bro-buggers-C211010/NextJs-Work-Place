"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/counter", label: "Counter" },
  { href: "/about", label: "About" },
  { href: "/articles/breaking-news-123?lang=en", label: "Articles (English)" },
  { href: "/articles/breaking-news-123?lang=fr", label: "Articles (French)" },
  { href: "/order-product", label: "Order Product" },
];
export default function Navigation() {
  const pathname = usePathname();
  return (
    <ul className="flex gap-4 text-lg list-none">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href) && link.href !== "/";
        return (
          <li
            className={isActive ? "bg-blue-500 text-white" : ""}
            key={link.href}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
