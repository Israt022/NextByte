interface LogoProps {
    className?: string;
    width?: number;
}

const Logo = ({
    className = "",
    width = 190,
}: LogoProps) => {
    return (
        <svg
            viewBox="0 0 220 54"
            width={width}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill="none"
            role="img"
            aria-label="NetByte IT"
        >
            <g
                stroke="#B6FB44"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M7 17 L7 37 L21 17 L21 37" />
                <path d="M29 27 H45 M37 19 V35" />
            </g>

            <text
                x="55"
                y="25"
                fill="currentColor"
                fontSize="19"
                fontWeight="800"
                fontFamily="Arial, sans-serif"
                letterSpacing="-.6"
            >
                NEXTBYTE
            </text>

            <text
                x="55"
                y="43"
                fill="#B6FB44"
                fontSize="12"
                fontWeight="700"
                fontFamily="Arial, sans-serif"
                letterSpacing="3"
            >
                IT
            </text>
        </svg>
    );
};

export default Logo;
