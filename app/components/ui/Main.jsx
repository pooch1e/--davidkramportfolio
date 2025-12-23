import Image from 'next/image';

export function Main() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-stone-100 to-background dark:from-stone-900 dark:to-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Welcome
              </h2>
              <div className="prose prose-lg prose-stone dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  {/* User will input their introduction here */}
                  Dr. David Kram is a distinguished opera conductor and Senior Fellow at The University of Melbourne. 
                  With a passion for bringing operatic masterworks to life, he has conducted performances across 
                  Australia and internationally, earning acclaim for his interpretive depth and musical precision.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  His work spans classical and contemporary opera, working with renowned orchestras and soloists 
                  to create unforgettable performances that resonate with audiences.
                </p>
              </div>
            </div>
            
            {/* Image */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[3/4] w-full max-w-md mx-auto lg:ml-auto shadow-2xl rounded-lg overflow-hidden">
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
          </div>
        </div>
      </section>

      {/* Additional Content Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h3 className="font-serif text-3xl font-bold tracking-tight mb-6">
            Philosophy & Approach
          </h3>
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p className="text-base leading-relaxed text-foreground/80">
              {/* Additional content area for the user */}
              [Additional content about conducting philosophy, approach to music, or other relevant information can be added here.]
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
