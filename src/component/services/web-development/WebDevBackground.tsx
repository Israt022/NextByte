import type { ReactNode } from "react";
interface WebDevBackgroundProps {
    children: ReactNode;
    className?: string;
}

const WebDevBackground = ({
    children,
    className = "",
}: WebDevBackgroundProps) => (
    <div className={`theme-transition relative min-h-screen w-full overflow-x-hidden bg-background ${className}`}>
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-gradient-to-b from-surface-secondary/80 via-surface-secondary/25 to-transparent"
        />

        <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-44 left-1/2 h-[420px] w-[860px] -translate-x-1/2 rounded-[100%] bg-brand/[0.06] blur-[120px] dark:bg-brand/[0.045]"
        />

        <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 right-0 h-[480px] w-[560px] bg-gradient-to-bl from-surface-secondary/60 via-transparent to-transparent blur-3xl opacity-70"
        />

        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />

        <div className="relative z-10 w-full">{children}</div>
    </div>
);

export default WebDevBackground;
