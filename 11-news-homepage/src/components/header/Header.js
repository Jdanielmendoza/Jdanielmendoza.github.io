import logo from "./img/logo.svg";
import menubar from "./img/icon-menu.svg";
import menubarClose from "./img/icon-menu-close.svg";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo"><img src={logo} alt="logo" /></div>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="bar-btn">
                    <div id="bar"></div>
                </label>
                <div className="bar1"></div>
                <ul className="nav-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New</a></li>
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header; 