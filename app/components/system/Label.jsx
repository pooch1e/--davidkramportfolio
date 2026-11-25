/**
 * Label — the system's metadata voice: IBM Plex Mono, small caps-case,
 * slightly tracked. Used for eyebrows, captions, dates and table headers.
 */

export function Label({ as: Tag = "span", tone = "muted", className = "", children, ...rest }) {
  const color = tone === "muted" ? "text-muted" : "text-fg";
  return (
    <Tag className={`font-mono text-xs uppercase tracking-label ${color} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
