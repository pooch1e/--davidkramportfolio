/**
 * Lists — the season-book list patterns: Timeline (career by city, set
 * large), WorksTable (work · composer · company), ChipList (venues and
 * orchestras) and EntryList (dated current projects).
 */
import { Label } from "./Label";

export function Timeline({ items }) {
  return (
    <ol className="border-b border-line">
      {items.map((item) => (
        <li
          key={`${item.city}-${item.role}`}
          className="grid gap-1 border-t border-line py-4 sm:grid-cols-12 sm:items-baseline sm:gap-6">
          <span className="text-xl leading-heading font-semibold tracking-heading sm:col-span-5">{item.city}</span>
          <span className="flex flex-col sm:col-span-7">
            <strong className="font-semibold">{item.role}</strong>
            <span className="text-sm text-muted">{item.institution}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function WorksTable({ works }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[32rem] border-collapse text-sm">
        <thead>
          <tr>
            {["Work", "Composer", "Company"].map((heading) => (
              <th key={heading} scope="col" className="pr-4 pb-2 text-left font-normal">
                <Label>{heading}</Label>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {works.map((work) => (
            <tr key={work.title} className="border-t border-line align-baseline">
              <td className="py-3 pr-4 text-base font-semibold">{work.title}</td>
              <td className="py-3 pr-4 text-muted">{work.composer}</td>
              <td className="py-3 text-muted">
                {work.company}
                {work.note && (
                  <Label tone="fg" className="ml-2 whitespace-nowrap">
                    · {work.note}
                  </Label>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ChipList({ items, label }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="border border-strong px-3 py-1 font-mono text-xs tracking-label">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function EntryList({ entries }) {
  return (
    <div className="grid gap-x-6 gap-y-10 md:grid-cols-3">
      {entries.map((entry) => (
        <article key={entry.title} className="flex flex-col gap-3 border-t border-line pt-3">
          <Label className="tabular-nums">{entry.period}</Label>
          <h3 className={`text-lg leading-heading font-semibold tracking-heading ${entry.italic ? "italic" : ""}`}>
            {entry.title}
          </h3>
          <Label tone="fg">{entry.role}</Label>
          <p className="text-sm text-muted">{entry.body}</p>
          {entry.href && (
            <a href={entry.href} target="_blank" rel="noopener noreferrer" className="text-link self-start text-sm">
              {entry.linkLabel}
            </a>
          )}
        </article>
      ))}
    </div>
  );
}
