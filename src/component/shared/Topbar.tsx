
const Topbar = () => {
    return (
        <div className="bg-[#111111] text-white">
            <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-5 py-2 text-xs sm:px-8 lg:px-12">

                {/* Contact Information */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                    <a
                        href="tel:YOUR_PHONE_NUMBER"
                        className="transition-colors hover:text-[#F477B6]"
                    >
                        <span className="mr-2 text-[#F477B6]">☎</span>
                        YOUR PHONE NUMBER
                    </a>

                    <a
                        href="mailto:YOUR_EMAIL"
                        className="transition-colors hover:text-[#F477B6]"
                    >
                        <span className="mr-2 text-[#F477B6]">✉</span>
                        YOUR EMAIL
                    </a>
                </div>

                {/* Social Links */}
                <div className="hidden items-center gap-4 sm:flex">
                    <a href="#" aria-label="Facebook" className="hover:text-[#F477B6]">Facebook</a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-[#F477B6]">LinkedIn</a>
                    <a href="#" aria-label="Instagram" className="hover:text-[#F477B6]">Instagram</a>
                </div>

            </div>
        </div>
    );
};

export default Topbar;
