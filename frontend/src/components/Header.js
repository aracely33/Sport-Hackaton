import ReactDOM from "react-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faBars} beat />;
/*
<FontAwesomeIcon icon="fa-solid fa-bars" beat />*/

function Header() {
  return (
    <>
<<<<<<< HEAD
      <header className="header">
        <div className="titulo__contenedor">
          <h1></h1>
          <div></div>
        </div>
        <nav className="navbar-container">
          <ul className="div-navbar">
            <li className="navbar-list">
              <a href="/" className="link-navbar">
                Milestones
=======
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
>>>>>>> 3e555cc002f6a4732ac90e864fc21f47558f8b10
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
<<<<<<< HEAD
              <a href="/" className="link-navbar">
                enlace hacia algo
              </a>
            </li>
          </ul>
        </nav>
      </header>
=======
            </li>
          </ul>
        </nav>
      </div>
>>>>>>> 3e555cc002f6a4732ac90e864fc21f47558f8b10
    </>
  );
}

export default Header;
