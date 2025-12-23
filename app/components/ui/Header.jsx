import { Navbar } from '../Navbar';

export function Header() {
  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <div>
            <h1 className="font-serif text-2xl font-bold tracking-tight">Dr David Kram</h1>
            <p className="text-sm text-foreground/60 mt-0.5">Opera Conductor</p>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}
