import Image from 'next/image';

export function Main() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-linear-to-b from-stone-100 to-background dark:from-stone-900 dark:to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-1 lg:order-1">
              <div className="relative aspect-3/4 w-full max-w-md mx-auto lg:mr-auto shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src="/dkMain.jpg"
                  fill
                  alt="Dr David Kram"
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="order-2 lg:order-2">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Welcome
              </h2>
              <div className="prose prose-lg prose-stone dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  David Kram here. Welcome to my web site. It&apos;s focussed on
                  my long professional musical experience, mostly as an
                  international conductor.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  When I moved to Australia I branched out into tertiary
                  education, arts management and composition. For the last ten
                  years I have been head-hunted for leadership roles in three
                  areas of community service, so my life is a rich tapestry, ever
                  embarking on new avenues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
