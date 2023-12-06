import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link to="/" className="text-decoration-none d-flex">
            <i className="bi bi-shop-window text-warning fs-4 me-2"></i>
            <a className="navbar-brand" href="#">
              eShop
            </a>
          </Link>
          <div class="input-group ">
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Search...."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text bg-warning" id="basic-addon2">
              <i className="bi bi-search bg-warning"></i>
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-2 mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active d-flex flex-column"
                  aria-current="page"
                  href="#"
                >
                  <small style={{ fontSize: "10px" }}>Hi,Guest</small>
                  <Link
                    to={"login"}
                    className="text-decoration-none text-white"
                  >
                    <strong style={{ fontSize: "11px" }}>Sign In</strong>
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active d-flex flex-column"
                  aria-current="page"
                  href="#"
                >
                  <small style={{ fontSize: "10px" }}>Your</small>
                  <strong style={{ fontSize: "11px" }}>Shop</strong>
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active d-flex"
                  aria-current="page"
                  to="/checkout"
                >
                  <i className="bi bi-basket2 text-white me-2 fs-5"></i>
                  <span className="mt-1">
                    <strong>{basket.length}</strong>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
