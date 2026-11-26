/**
 * About — modelled on the svelte-folio About sheet: biography beside the
 * portrait, then a contact strip (location, CV, biography, email). Below it,
 * the season-book sections for positions, honours and photography.
 */
import { Container, Section } from "../components/system/Section";
import { Figure } from "../components/system/Figure";
import { Label } from "../components/system/Label";
import { Timeline } from "../components/system/Lists";
import { person, biography, images, downloads, positions, honour } from "../content/profile";

export const metadata = {
  title: "About",
  description: "Biography, positions and honours of Dr David Kram AM, conductor and Senior Fellow at The University of Melbourne.",
};

export default function About() {
  const strip = [
    { label: "Based in", value: person.location },
    ...downloads.map((file) => ({ label: file.format, value: file.label, href: file.href, download: true })),
    { label: "Email", value: person.email, href: `mailto:${person.email}` },
  ];

  return (
    <>
      <Container className="flex flex-col gap-10 pt-10 pb-16 md:pt-16 md:pb-24">
        <h1 className="enter text-display leading-display font-medium tracking-display">About</h1>

        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="enter flex flex-col gap-5 md:col-span-7" style={{ "--i": 1 }}>
            <Label tone="fg">
              {person.fullTitle} {person.postNominals} · {person.credentials}
            </Label>
            <div className="flex max-w-measure flex-col gap-4">
              {biography.map((paragraph, index) => (
                <p key={paragraph} className={index === 0 ? "text-lg leading-heading" : "text-muted"}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <Figure
            image={images.portrait}
            aspect="aspect-[4/5]"
            position="50% 25%"
            preload
            reveal={false}
            className="enter md:col-span-5"
            style={{ "--i": 2 }}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>

        <dl className="enter grid gap-6 border-y border-line py-5 sm:grid-cols-2 lg:grid-cols-4" style={{ "--i": 3 }}>
          {strip.map((item) => (
            <div key={item.label + item.value} className="flex min-w-0 flex-col gap-1">
              <Label as="dt">{item.label}</Label>
              <dd className="break-words">
                {item.href ? (
                  <a href={item.href} download={item.download ? "" : undefined} className="text-link">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      <Section id="positions" title="Positions" label="Appointments, in career order">
        <Timeline items={positions} />
      </Section>

      <Section id="honours" title="Honours" label={honour.title}>
        <figure className="flex flex-col gap-4">
          <blockquote className="max-w-[24ch] text-xl leading-heading font-medium tracking-heading">
            “{honour.citation}”
          </blockquote>
          <Label as="figcaption">AM citation</Label>
        </figure>
      </Section>

      <Section id="photography" title="Photography">
        <Figure image={images.conducting} aspect="aspect-[3/2]" position="50% 30%" sizes="(min-width: 768px) 70vw, 100vw" />
      </Section>
    </>
  );
}
