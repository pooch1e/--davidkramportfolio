import { Navbar } from '../Navbar';
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <div>
            <Link href={'/'}>
              <h1 className="font-serif text-2xl font-bold tracking-tight transition-colors hover:text-accent-light">
                Dr David Kram AM
              </h1>
            </Link>
            <p className="text-sm text-foreground/60 mt-0.5">
              Senior Fellow, The University of Melbourne
            </p>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
