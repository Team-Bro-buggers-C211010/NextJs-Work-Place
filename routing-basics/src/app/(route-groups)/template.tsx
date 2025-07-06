"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/forgot-password", label: "Forgot Password" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input, setInput] = useState("");
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "Arial, sans-serif",
          margin: 0,
          padding: 0,
          height: "100vh",
        }}
      >
        <div>
          <input className="p-2 border border-gray-300" value={input} onChange={(e) => setInput(e.target.value)} />
        </div> 

        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
            backgroundColor: "#f5f5f5",
          }}
        >
          <h1>Auth Nav</h1>
          <nav>
            <ul className="flex gap-4 text-lg list-none">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (pathname.startsWith(link.href) && pathname !== "/login");
                return (
                  <li
                    key={link.href}
                    style={
                      isActive
                        ? { backgroundColor: "#0070f3", color: "#fff" }
                        : { backgroundColor: "transparent", color: "#000" }
                    }
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
