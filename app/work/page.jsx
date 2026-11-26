/**
 * Work — recent conducting set as a programme listing (work, composer,
 * company), recordings, and the opera houses and orchestras he has led.
 */
import { Container, Section } from "../components/system/Section";
import { Label } from "../components/system/Label";
import { WorksTable, ChipList } from "../components/system/Lists";
import { works, houses, recording } from "../content/profile";

export const metadata = {
  title: "Work",
  description: "Recent conducting, world premieres and the opera houses and orchestras Dr David Kram AM has conducted.",
};

export default function Work() {
  return (
    <>
      <Container className="flex flex-col gap-6 pt-10 pb-16 md:pt-16 md:pb-24">
        <h1 className="enter text-display leading-display font-medium tracking-display">Work</h1>
        <p className="enter max-w-measure text-lg leading-heading" style={{ "--i": 1 }}>
          Opera and concert work across Germany, France, Australia and beyond, from Wagner and Strauss to new Australian
          opera.
        </p>
      </Container>

      <Section id="recent" title="Recent conducting" label="Guest engagements and premieres">
        <WorksTable works={works} />
      </Section>

      <Section id="recordings" title="Recordings">
        <p className="text-lg leading-heading">{recording.title}</p>
      </Section>

      <Section id="houses" title="Houses & orchestras" label="Has conducted for">
        <ChipList items={houses} label="Opera houses, broadcasters and orchestras" />
      </Section>
    </>
  );
}
