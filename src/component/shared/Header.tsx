
import Topbar from "./Topbar";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            {/* Scrolls away */}
            <Topbar />

            {/* Stays at the top */}
            <div className="sticky top-0 z-50">
                <Navbar />
            </div>
        </header>
    );
};

export default Header;
