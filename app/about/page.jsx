import Image from 'next/image';
import { Header } from '../components/ui/Header';
import { Footer } from '../components/ui/Footer';

export const metadata = {
  title: 'About | Dr David Kram',
  description:
    'Learn more about Dr David Kram, his background, and his work as an opera conductor.',
};

export default function About() {
  return (
    <>
      <Header />
      <main>
        {/* CV Download Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 border-b border-border">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-2">CV</h2>
              <p className="text-foreground/70">
                Download my complete professional CV
              </p>
            </div>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors shadow-md hover:shadow-lg">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download CV
            </a>
          </div>
        </section>
        {/* CV Download Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 border-b border-border">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="font-serif text-2xl font-bold mb-2">Biography</h2>
              <p className="text-foreground/70">Download my biography</p>
            </div>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors shadow-md hover:shadow-lg">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Bio
            </a>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gallery Image 1 */}
            <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="/gallery-1.jpg"
                fill
                alt="Dr David Kram conducting"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">
                    Performance at [Venue Name]
                  </p>
                  <p className="text-white/80 text-sm">[Year/Event Details]</p>
                </div>
              </div>
            </div>

            {/* Gallery Image 2 */}
            <div className="relative aspect-4/3 rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="/gallery-2.jpg"
                fill
                alt="Dr David Kram in rehearsal"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium">
                    Rehearsal at [Venue Name]
                  </p>
                  <p className="text-white/80 text-sm">[Year/Event Details]</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-foreground/60 mt-6 text-center">
            [Add your gallery images as gallery-1.jpg and gallery-2.jpg in the
            public folder]
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
