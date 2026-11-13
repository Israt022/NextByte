import type { IconType } from "react-icons";
import { FaBolt, FaCodeCommit, FaHeadset, FaShieldHalved } from "react-icons/fa6";
import type { Translations } from "@/lib/translations";

type Key = keyof Translations;

export interface AdvantageData {
    title: Key;
    desc: Key;
    icon: IconType;
    iconColor: string; // Tailwind text color class
}

export const advantages: AdvantageData[] = [
    { title: "advPerfTitle", desc: "advPerfDesc", icon: FaBolt, iconColor: "text-orange-400" },
    { title: "advSecurityTitle", desc: "advSecurityDesc", icon: FaShieldHalved, iconColor: "text-blue-500" },
    { title: "advOwnershipTitle", desc: "advOwnershipDesc", icon: FaCodeCommit, iconColor: "text-emerald-500" },
    { title: "advSupportTitle", desc: "advSupportDesc", icon: FaHeadset, iconColor: "text-purple-400" },
];