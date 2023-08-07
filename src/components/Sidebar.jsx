
import { Outlet } from "react-router-dom"
import AppNav from "./AppNav"
import Logo from "./Logo"

import Styles from "./Sidebar.module.css"
export default function Sidebar() {
    return <div className={Styles.sidebar}>
        <Logo />
        <AppNav />
        <Outlet/>
        <p>list of cities</p>
        <footer className={Styles.footer}>
            <p className={Styles.copyright}>
                &copy; copyright {new Date().getFullYear()} by WorldWise inc.
            </p>

        </footer>
    </div>
}
