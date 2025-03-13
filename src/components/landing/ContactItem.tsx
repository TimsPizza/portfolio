import React from "react";

interface ContactItemProps {
  label: string;
  value: string;
  href?: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  label,
  value,
  href,
}) => (
  <div className="flex flex-wrap items-start gap-2">
    <div className="flex items-center gap-2 whitespace-nowrap">
      <span style={{ color: "var(--theme-code-keyword)" }}>const</span>
      <span style={{ color: "var(--theme-code-variable)" }}>{label}</span>
      <span style={{ color: "var(--theme-text-light)" }}>=</span>
    </div>
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline-offset-4 hover:underline hover:brightness-125"
        style={{ color: "var(--theme-code-string)" }}
      >
        {`"${value}"`}
      </a>
    ) : (
      <span style={{ color: "var(--theme-code-string)" }}>{`"${value}"`}</span>
    )}
  </div>
);
