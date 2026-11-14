import Contact from "@/component/Contact/Contact";
import DotBackground from "@/component/shared/DotBackground";
import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | NetByte IT",
};

const ContactPage = () => (
    <DotBackground>
        <Contact />
    </DotBackground>
);

export default ContactPage;