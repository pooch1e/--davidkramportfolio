/**
 * Section — the season-book page row: a heavy ink rule, a narrow heading
 * column and a wide body column on a 12-column grid, stacking on small
 * screens. Also exports Container, the page-width wrapper with side gutters.
 */
import { Label } from "./Label";

export function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-page px-(--gutter) ${className}`}>{children}</div>;
}

export function Section({ id, title, label, children, className = "" }) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section id={id} aria-labelledby={headingId} className={className}>
      <Container>
        <div className="grid gap-6 border-t-2 border-strong pt-5 pb-16 md:grid-cols-12 md:gap-8 md:pb-24">
          <header className="flex flex-col gap-2 md:col-span-3">
            <h2 id={headingId} className="text-lg leading-heading font-semibold tracking-heading">
              {title}
            </h2>
            {label && <Label>{label}</Label>}
          </header>
          <div className="min-w-0 md:col-span-9">{children}</div>
        </div>
      </Container>
    </section>
  );
}
