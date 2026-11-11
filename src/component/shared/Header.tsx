import Topbar from "./Topbar";
import Navbar from "./Navbar";

// No wrapper element: a sticky child only sticks within its parent's height,
// so Navbar (sticky top-0) must be a direct child of the page container.
const Header = () => (
    <>
        <Topbar />
        <Navbar />
    </>
);

export default Header;