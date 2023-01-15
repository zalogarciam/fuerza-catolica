import { useRef } from "react";
import { BsList, BsXCircle } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo.jpeg";

const Header = () => {
  const header = useRef();
  const modal = useRef();

  const showMenu = () => {
    header.current.classList.add("header--move");
    modal.current.classList.add("menumodal--show");
  };

  const hideMenu = () => {
    header.current.classList.remove("header--move");
    modal.current.classList.remove("menumodal--show");
  };

  return (
    <div>
      <header className="header" ref={header}>
        <nav className="nav">
          <div className="container f-elements f-elements--header">
            <Link to="/fuerza-catolica/home/">
              <img
                src={logo}
                alt="Logo de EAKON"
                className="nav__logo"
                width="56"
                height="56"
              />
            </Link>
            <div
              className="menumodal menumodal--header"
              ref={modal}
              onClick={hideMenu}
            >
              <ul
                className="list list--header"
                onClick={(e) => e.stopPropagation()}
              >
                <li>
                  <NavLink
                    to="/fuerza-catolica/us"
                    className={({ isActive }) =>
                      isActive ? "list__link list__link--active" : "list__link"
                    }
                    onClick={hideMenu}
                  >
                    Nosotros
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/fuerza-catolica/contact"
                    className={({ isActive }) =>
                      isActive ? "list__link list__link--active" : "list__link"
                    }
                    onClick={hideMenu}
                  >
                    Contacto
                  </NavLink>
                </li>
                <li className="icon icon--close" onClick={hideMenu}>
                  <BsXCircle />
                </li>
              </ul>
            </div>
            <div className="f-elements f-elements--center">
              <button className="icon icon--menu" onClick={showMenu}>
                <BsList />
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="vh-100 d-flex justify-content-center align-items-center">
        <h1>Bienvenido: admin</h1>
      </div>
    </div>
  );
};

export default Header;
