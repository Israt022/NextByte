// import type { ReactNode } from "react";

// // Shared page background: surface color + dotted pattern.
// // Wrap any page's content with <DotBackground>…</DotBackground>.
// // Dots use currentColor, so they work in both light and dark themes.
// const DotBackground = ({
//     children,
//     className = "",
// }: {
//     children: ReactNode;
//     className?: string;
// }) => (
//     <div className={`theme-transition relative overflow-hidden bg-surface ${className}`}>
//         <div
//             aria-hidden="true"
//             className="pointer-events-none absolute inset-0 text-text-secondary opacity-25 [background-image:radial-gradient(currentColor_1.5px,transparent_1.5px)] [background-size:32px_32px]"
//         />
//         <div className="relative pb-9">{children}</div>
//     </div>
// );

// export default DotBackground;
import type { ReactNode } from "react";

// Shared page background: surface color + a dotted pattern at the top of the page
// that fades out downward (behind the page heading and just the top of the cards).
// Wrap any page with <DotBackground>…</DotBackground>.
// Use `dotsClassName` to change how far down the dots reach, e.g. "h-[420px]".
// Dots use currentColor, so they work in both light and dark themes.
const DotBackground = ({
    children,
    className = "",
    dotsClassName = "h-[520px]",
}: {
    children: ReactNode;
    className?: string;
    dotsClassName?: string;
}) => (
    <div className={`theme-transition relative overflow-hidden bg-surface ${className}`}>
        <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-x-0 top-0 text-text-secondary opacity-25 [background-image:radial-gradient(currentColor_1.5px,transparent_1.5px)] [background-size:32px_32px] [mask-image:linear-gradient(to_bottom,black_40%,transparent)] ${dotsClassName}`}
        />
        <div className="relative pb-9">{children}</div>
    </div>
);

export default DotBackground;