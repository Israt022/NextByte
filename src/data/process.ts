import type { IconType } from "react-icons";
import {
    FaBezierCurve,
    FaCheckDouble,
    FaCode,
    FaMagnifyingGlass,
    FaRocket,
} from "react-icons/fa6";
import type { Translations } from "@/lib/translations";

type Key = keyof Translations;

export interface ProcessStepData {
    title: Key;
    desc: Key;
    icon: IconType;
}

// Step numbers (01–05) are generated from the array order
export const processSteps: ProcessStepData[] = [
    { title: "stepDiscoveryTitle", desc: "stepDiscoveryDesc", icon: FaMagnifyingGlass },
    { title: "stepDesignTitle", desc: "stepDesignDesc", icon: FaBezierCurve },
    { title: "stepDevTitle", desc: "stepDevDesc", icon: FaCode },
    { title: "stepQaTitle", desc: "stepQaDesc", icon: FaCheckDouble },
    { title: "stepLaunchTitle", desc: "stepLaunchDesc", icon: FaRocket },
];