import type { ReactNode } from "react";

// Shared page background: plain, modern, and professional studio backdrop.
// Completely avoids AI clichés (zero dots, zero grid/box patterns).
// Wraps inner pages (Projects, Contact, Team, etc.) with a clean architectural aesthetic.
interface DotBackgroundProps {
    children: ReactNode;
    className?: string;
}

const DotBackground = ({
    children,
    className = "",
}: DotBackgroundProps) => (
    <div className={`theme-transition relative min-h-screen w-full overflow-x-hidden bg-background ${className}`}>
        {/* Subtle Top Gradient Wash */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-surface-secondary/70 via-surface-secondary/20 to-transparent"
        />

        {/* Soft Ambient Brand Center Sheen */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[380px] w-[760px] -translate-x-1/2 rounded-[100%] bg-brand/[0.045] blur-[120px] dark:bg-brand/[0.035]"
        />

        {/* Top Horizon Hairline Accent */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />

        {/* Page Content */}
        <div className="relative z-10 w-full">{children}</div>
    </div>
);

export default DotBackground;
