import type { ReactNode } from "react";

// Shared page background: plain, modern, and professional architectural backdrop.
// Wraps inner pages (Projects, Contact, Team, etc.) with a clean structural aesthetic.
interface DotBackgroundProps {
    children: ReactNode;
    className?: string;
}

const DotBackground = ({
    children,
    className = "",
}: DotBackgroundProps) => (
    <div className={`theme-transition relative min-h-screen overflow-hidden bg-background ${className}`}>
        {/* Subtle Top Gradient Wash */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-surface-secondary/70 via-surface-secondary/25 to-transparent"
        />

        {/* Soft Ambient Brand Center Sheen */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-brand/[0.04] blur-[110px] dark:bg-brand/[0.03]"
        />

        {/* Minimal Architectural Hairline Grid with Radial Fade */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[620px] text-text-primary opacity-[0.03] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_50%,transparent_100%)] dark:opacity-[0.045]"
        />

        {/* Top Horizon Hairline Accent */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />

        {/* Page Content */}
        <div className="relative z-10">{children}</div>
    </div>
);

export default DotBackground;
