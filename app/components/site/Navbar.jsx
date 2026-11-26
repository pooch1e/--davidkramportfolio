/**
 * Navbar — primary navigation. Marks the current route with aria-current,
 * which also pins the underline that otherwise draws in on hover.
 */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul className="flex items-center gap-5 sm:gap-8">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="nav-link font-mono text-xs uppercase tracking-label">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
