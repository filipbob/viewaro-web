import { Fragment } from "react";

/**
 * Renders a tiny inline syntax used inside translated legal copy:
 *   **bold text**        -> <strong>
 *   [link text](/path)   -> <a href="/path">
 * hrefs are never translated, so every locale's dictionary re-uses the same
 * href value — only the bracketed label differs per language.
 */
export default function Inline({ text }: { text: string }) {
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <Fragment key={key++}>{text.slice(lastIndex, match.index)}</Fragment>,
      );
    }
    if (match[1] !== undefined) {
      parts.push(<strong key={key++}>{match[1]}</strong>);
    } else {
      const label = match[2];
      const href = match[3];
      const external = href.startsWith("http");
      parts.push(
        <a
          key={key++}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {label}
        </a>,
      );
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(<Fragment key={key++}>{text.slice(lastIndex)}</Fragment>);
  }

  return <>{parts}</>;
}
