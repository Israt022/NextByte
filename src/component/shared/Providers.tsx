"use client";

import type { ReactNode } from "react";
import { AppProviders } from "@/context/AppProviders";

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <AppProviders>
            {children}
        </AppProviders>
    );
}