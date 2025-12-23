import Link from 'next/link';

const navItems = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <nav className="flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent-light relative group">
          {item.label}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-light transition-all group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
}
