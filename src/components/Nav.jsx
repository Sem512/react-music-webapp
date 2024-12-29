import { useState } from "react";

function Navbar() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleNavbar = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="navbar">
            <button className="navbar-toggle" onClick={toggleNavbar}>
            <i className="fi fi-rr-menu-burger"></i>
            </button>
            {isVisible && (
                <nav>
                    <ul>
                        <li>Genres</li>
                        <li>Favorites</li>
                        <li>Playlists</li>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default Navbar;