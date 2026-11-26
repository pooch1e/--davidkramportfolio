/**
 * Footer — a slim trigger bar fixed to the bottom of every page. It opens a
 * bottom sheet holding the contact block: email, phone and location,
 * downloads, and the copyright line.
 */
"use client";

import { useState } from "react";
import { Container } from "../system/Section";
import { Label } from "../system/Label";
import { Sheet } from "../system/Sheet";
import { Button, DownloadIcon } from "../system/Button";
import { person, downloads } from "../../content/profile";

const contacts = [
  { label: "Email", value: person.email, href: `mailto:${person.email}` },
  { label: "Phone & WhatsApp", value: person.phone, href: person.phoneHref },
  { label: "Based in", value: person.location },
];

export function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-page">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="footer-trigger flex w-full items-center justify-center font-mono text-xs uppercase tracking-label">
        Contact
      </button>
      <Sheet open={open} onClose={() => setOpen(false)} label="Contact">
        <Container className="grid gap-10 pt-2 pb-10 md:grid-cols-12 md:gap-8">
          <h2 className="text-xl leading-heading font-semibold tracking-heading md:col-span-3">Contact</h2>
          <dl className="grid gap-6 sm:grid-cols-3 md:col-span-9">
            {contacts.map((item) => (
              <div key={item.label} className="flex min-w-0 flex-col gap-1">
                <Label as="dt">{item.label}</Label>
                <dd className="break-words">
                  {item.href ? (
                    <a href={item.href} className="text-link">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-3 md:col-span-9 md:col-start-4">
            {downloads.map((file) => (
              <Button key={file.href} href={file.href} variant="secondary" download icon={<DownloadIcon />}>
                {file.label}
              </Button>
            ))}
          </div>
        </Container>
        <Container>
          <div className="flex flex-wrap justify-between gap-3 border-t border-line py-5">
            <Label>
              © {new Date().getFullYear()} {person.fullTitle} {person.postNominals}
            </Label>
            <Label>{person.credentials}</Label>
          </div>
        </Container>
      </Sheet>
    </footer>
  );
}
