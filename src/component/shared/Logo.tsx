
import React from "react";

interface LogoProps {
    className?: string;
    width?: number;
    height?: number;
    iconOnly?: boolean;
}

const Logo = ({
    className = "",
    width = 400,
    height = 64,
    iconOnly = false,
}: LogoProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox={iconOnly ? "0 0 90 60" : "0 0 400 60"}
            width={iconOnly ? 90 : width}
            height={height}
            fill="none"
            className={className}
            role="img"
            aria-label="Sawda Digital"
        >
            <g fill="#F477B6">
                {/* SD Monogram */}
                <path d="
                    M4 43
                    C13 41 17 35 21 25
                    L27 9
                    C29 4 34 1 40 1
                    H77
                    C81 1 84 5 82 10
                    L68 43
                    C65 51 59 55 50 55
                    H38
                    L54 15
                    H42
                    L30 43
                    C26 51 20 55 11 55
                    H0
                    C2 51 3 47 4 43
                    Z
                " />

                <path d="
                    M35 43
                    L47 13
                    H62
                    L50 43
                    C48 48 44 52 39 55
                    H25
                    C30 52 33 48 35 43
                    Z
                " />
            </g>

            {!iconOnly && (
                <text
                    x="94"
                    y="43"
                    fill="#F477B6"
                    fontFamily="Arial, Helvetica, sans-serif"
                    fontSize="35"
                    fontWeight="800"
                    letterSpacing="-1.5"
                >
                    NEXT BYTE IT
                </text>
            )}
        </svg>
    );
};

export default Logo;
