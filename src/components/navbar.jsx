import "./navbar.module.css";
import { NavLink } from"react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">
            Mini <span> blog </span>
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About">
                     Sobre
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default NavBar;