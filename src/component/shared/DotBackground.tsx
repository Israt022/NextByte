import type { ReactNode } from "react";

// Shared page background: surface color + dotted pattern.
// Wrap any page's content with <DotBackground>…</DotBackground>.
// Dots use currentColor, so they work in both light and dark themes.
const DotBackground = ({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) => (
    <div className={`theme-transition relative overflow-hidden bg-surface ${className}`}>
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 text-text-secondary opacity-25 [background-image:radial-gradient(currentColor_1.5px,transparent_1.5px)] [background-size:32px_32px]"
        />
        <div className="relative">{children}</div>
    </div>
);

export default DotBackground;