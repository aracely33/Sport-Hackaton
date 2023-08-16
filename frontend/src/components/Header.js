import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faBars} beat />;

<FontAwesomeIcon icon="fa-solid fa-bars" beat />;

function Header() {
  return (
    <>
      <div className="header">
        <nav className="nav">
          <a href="#" className="logo nav-link">
            Logo
          </a>

          <button className="nav__toggle">{element}</button>
          <ul className="nav__menu">
            <li className="nav__menu-item">
              <a href="#" className="nav__menu-link nav-link">
                blog
              </a>
            </li>
            <li className="nav__menu-item">
              <a href="#" className="nav__menu-link nav-link">
                videos
              </a>
            </li>
            <li className="nav__menu-item">
              <a href="#" className="nav__menu-link nav-link">
                sobre
              </a>
            </li>
            <li className="nav__menu-item">
              <a href="#" className="nav__menu-link nav-link">
                importante
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
