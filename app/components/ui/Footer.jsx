export function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-3">Contact</h4>
            <p className="text-sm text-foreground/60">
              Email
              <br />
              Davidkram@bigpond.com
            </p>
            <br />
            <p className="text-sm text-foreground/60">
              WhatsApp
              <br />
              +61 412 114 725
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Dr David Kram. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
