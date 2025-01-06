import { useState } from "react";
import { NavLink } from "react-router-dom";

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
                        <li><NavLink to="/genres">Genres</NavLink></li>
                        <li><NavLink to="/favorites">Favorites</NavLink></li>
                        <li><NavLink to="/playlists">Playlists</NavLink></li>
                    </ul>
                </nav>
            )}
        </div>
    );
}

export default Navbar;