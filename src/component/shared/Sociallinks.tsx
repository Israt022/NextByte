import { socials } from "@/lib/Site";
import Icon from "./Icon";

const SocialLinks = ({ className = "" }: { className?: string }) => (
    <ul className={`items-center gap-4 ${className}`}>
        {socials.map(({ name, href, icon }) => (
            <li key={name}>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="block text-text-secondary transition-colors hover:text-brand"
                >
                    <Icon name={icon} className="h-[18px] w-[18px]" />
                </a>
            </li>
        ))}
    </ul>
);

export default SocialLinks;