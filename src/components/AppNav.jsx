import { NavLink } from "react-router-dom";
import Styles from "./AppNav.module.css"
export default function AppNav() {
    return <nav className={Styles.nav} >
        <ul>
            <li>
                <NavLink to="cities">Cities</NavLink>
            </li>
            <li>
                <NavLink to="contries">Countries</NavLink>
            </li>
        </ul>
    </nav>
}