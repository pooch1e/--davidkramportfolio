/**
 * Home — season-book cover: name set at display size over a wide conducting
 * photograph, David's own welcome, and the projects he is working on now.
 */
import { Container, Section } from "./components/system/Section";
import { Figure } from "./components/system/Figure";
import { Label } from "./components/system/Label";
import { Button, ArrowIcon } from "./components/system/Button";
import { EntryList } from "./components/system/Lists";
import { person, welcome, images, current } from "./content/profile";

export default function Home() {
  return (
    <>
      <Container className="flex flex-col gap-6 pt-10 pb-16 md:gap-8 md:pt-16 md:pb-24">
        <Label className="enter" style={{ "--i": 0 }}>
          {person.roles.join(" · ")}
        </Label>
        <h1 className="enter text-display leading-display font-medium tracking-display" style={{ "--i": 1 }}>
          {person.name}
          <span className="ml-[0.2em] align-[0.9em] font-mono text-[0.22em] tracking-label text-muted">
            {person.postNominals}
          </span>
        </h1>
        <Figure
          image={images.conducting}
          aspect="aspect-[4/3] sm:aspect-[21/9]"
          position="50% 28%"
          preload
          reveal={false}
          className="enter"
          style={{ "--i": 2 }}
          sizes="(min-width: 1280px) 1280px, 100vw"
        />
        <div className="enter grid gap-8 md:grid-cols-12" style={{ "--i": 3 }}>
          <div className="flex max-w-measure flex-col gap-4 text-lg leading-heading md:col-span-8">
            {welcome.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap content-end gap-3 md:col-span-4 md:justify-end">
            <Button href="/about" icon={<ArrowIcon />}>
              About
            </Button>
            <Button href="/work" variant="secondary">
              Work
            </Button>
          </div>
        </div>
      </Container>

      <Section id="now" title="Now" label="Current projects">
        <EntryList entries={current} />
      </Section>
    </>
  );
}
