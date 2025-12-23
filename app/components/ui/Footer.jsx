export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-3">Contact</h4>
            <p className="text-sm text-foreground/60">
              The University of Melbourne<br />
              Senior Fellow
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li><a href="/about" className="hover:text-accent-light transition-colors">About</a></li>
              <li><a href="/performances" className="hover:text-accent-light transition-colors">Performances</a></li>
              <li><a href="/contact" className="hover:text-accent-light transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Social/Professional */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-3">Connect</h4>
            <p className="text-sm text-foreground/60">
              [Social media links or professional networks can be added here]
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Dr David Kram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
