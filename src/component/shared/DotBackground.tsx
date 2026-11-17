import type { ReactNode } from "react";

// Shared page background: theme-aware surface with subtle ambient glow and delicate dot grid
// Wraps inner pages (Projects, Contact, Team, etc.) to give a cohesive, modern tech feel.
interface DotBackgroundProps {
    children: ReactNode;
    className?: string;
}

const DotBackground = ({
    children,
    className = "",
}: DotBackgroundProps) => (
    <div className={`theme-transition relative min-h-screen overflow-hidden bg-background ${className}`}>
        {/* Subtle Ambient Brand Glow at Top */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-brand/10 blur-[130px] dark:bg-brand/5"
        />

        {/* Refined Dot Pattern that fades out downward */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[650px] text-text-secondary opacity-[0.15] [background-image:radial-gradient(currentColor_1.5px,transparent_1.5px)] [background-size:28px_28px] [mask-image:linear-gradient(to_bottom,black_40%,transparent)]"
        />

        {/* Page Content */}
        <div className="relative">{children}</div>
    </div>
);

export default DotBackground;
