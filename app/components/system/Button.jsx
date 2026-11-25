/**
 * Button — hard-edged link-button in two variants. Primary is a solid ink
 * fill; secondary is an outline that inverts on hover. Internal routes use
 * next/link; downloads and external URLs render a plain anchor.
 */
import Link from "next/link";

const variants = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
};

export function Button({ href, variant = "primary", download, external, icon, children, className = "" }) {
  const classes = `${variants[variant]} ${className}`;
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  if (download || external) {
    return (
      <a
        href={href}
        className={classes}
        download={download ? "" : undefined}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14" strokeLinecap="square" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M5 12h13m0 0-5-5m5 5-5 5" strokeLinecap="square" />
    </svg>
  );
}
