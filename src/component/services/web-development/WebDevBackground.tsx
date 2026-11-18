import type { ReactNode } from "react";

// Specialized background for nested /services/* deep-dive pages.
// Distinct from top-level DotBackground: features modern architectural linear gridlines,
// code-inspired ambient lighting, and top cyber-gradient horizon.
interface WebDevBackgroundProps {
    children: ReactNode;
    className?: string;
}

const WebDevBackground = ({
    children,
    className = "",
}: WebDevBackgroundProps) => (
    <div className={`theme-transition relative min-h-screen w-full overflow-x-hidden bg-background ${className}`}>
        {/* Top Dual Radial Ambient Auras */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-0 h-[550px] w-[650px] rounded-full bg-brand/10 blur-[140px] dark:bg-brand/5"
        />
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[600px] rounded-full bg-cyan-500/10 blur-[140px] dark:bg-cyan-500/5"
        />

        {/* Specialized Nested Architectural Blueprint Grid (No Dots) */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[850px] text-text-primary opacity-[0.035] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_0%,black_60%,transparent_100%)] dark:opacity-[0.05]"
        />

        {/* Cyber Horizon Accent Line */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
        />

        {/* Content */}
        <div className="relative z-10 w-full">{children}</div>
    </div>
);

export default WebDevBackground;
