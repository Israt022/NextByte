import type { ReactNode } from "react";

// Professional Studio Atmosphere Background for UI/UX Design Service Page.
// Zero AI clichés: no dots, no checkerboard/grid boxes.
// Clean studio lighting, layered optical depth, and seamless responsive layout.
interface UiUxBackgroundProps {
    children: ReactNode;
    className?: string;
}

const UiUxBackground = ({
    children,
    className = "",
}: UiUxBackgroundProps) => (
    <div className={`theme-transition relative min-h-screen w-full overflow-x-hidden bg-background ${className}`}>
        {/* 1. Top Soft Studio Lighting Wash (Smooth vertical fade into background) */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-surface-secondary/80 via-surface-secondary/25 to-transparent"
        />

        {/* 2. Focused Center Ambient Spotlight (Soft architectural illumination) */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-44 left-1/2 h-[420px] w-[860px] -translate-x-1/2 rounded-[100%] bg-brand/[0.06] blur-[120px] dark:bg-brand/[0.045]"
        />

        {/* 3. Subtle Asymmetric Diagonal Ambient Sheen (Adds natural photographic depth) */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 right-0 h-[480px] w-[560px] bg-gradient-to-bl from-surface-secondary/60 via-transparent to-transparent blur-3xl opacity-70"
        />

        {/* 4. Precision Top Horizon Hairline (Clean architectural separation) */}
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />

        {/* Page Content */}
        <div className="relative z-10 w-full">{children}</div>
    </div>
);

export default UiUxBackground;
