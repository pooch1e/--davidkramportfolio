/**
 * Header — sticky masthead with the name as home link, the current
 * affiliation as a mono label, primary navigation and the theme toggle.
 */
import Link from "next/link";
import { Navbar } from "./Navbar";
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "../system/Section";
import { Label } from "../system/Label";
import { person } from "../../content/profile";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-page">
      <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-4">
        <Link href="/" className="flex flex-col">
          <span className="text-base leading-heading font-semibold tracking-heading">
            {person.fullTitle} {person.postNominals}
          </span>
          <Label className="hidden sm:inline">{person.affiliation}</Label>
        </Link>
        <div className="flex items-center gap-5 sm:gap-8">
          <Navbar />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
