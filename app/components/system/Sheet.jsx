/**
 * Sheet — bottom sheet built on a native modal <dialog>, so focus trapping,
 * Escape-to-close and the backdrop come from the platform. Slides up on open;
 * on close it plays the exit transition before the dialog is actually closed.
 * Clicking the backdrop closes it.
 */
"use client";

import { useEffect, useRef } from "react";

export function Sheet({ open, onClose, label, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.removeAttribute("data-closing");
      dialog.showModal();
      return;
    }

    if (!open && dialog.open) {
      const finish = () => {
        dialog.removeAttribute("data-closing");
        dialog.close();
      };
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        finish();
        return;
      }
      // transitionend bubbles from children and fires for ::backdrop too; only the sheet's own slide counts.
      const onEnd = (event) => {
        if (event.target !== dialog || event.pseudoElement || event.propertyName !== "transform") return;
        dialog.removeEventListener("transitionend", onEnd);
        finish();
      };
      dialog.setAttribute("data-closing", "");
      dialog.addEventListener("transitionend", onEnd);
      return () => dialog.removeEventListener("transitionend", onEnd);
    }
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      className="sheet"
      onCancel={(event) => {
        // Escape would close the dialog instantly; route it through state so the exit transition plays.
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}>
      <div className="flex justify-end">
        <button type="button" onClick={onClose} className="nav-link m-4 font-mono text-xs uppercase tracking-label">
          Close
        </button>
      </div>
      {children}
    </dialog>
  );
}
