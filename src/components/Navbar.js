import React from "react";
import "./Navbar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="">
        <nav className="navbar fixed-top navbar-expand-lg bg-black ">
          <div className="container-fluid">
            <a href="/" className="navbar-brand text-white">
              Protfolio
            </a>
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white "
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
              </ul>

              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white"
                    aria-current="page"
                    to="/About"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white"
                    aria-current="page"
                    to="/Services"
                  >
                    Services
                  </NavLink>
                </li>
              </ul>

              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white"
                    aria-current="page"
                    to="/Resume"
                  >
                    Resume
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white"
                    aria-current="page"
                    to="/Gallery"
                  >
                    Gallery
                  </NavLink>
                </li>
              </ul>
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-white"
                    aria-current="page"
                    to="/Contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <a
              className="text-white"
              href="https://www.linkedin.com/in/sahil-sawant-4bb825217/"
              target="blank"
            >
              <LinkedInIcon />
            </a>
            &nbsp; &nbsp;
            <a
              className="text-white"
              href="mailto:sbsawant358@gmail.com"
              target="blank"
            >
              <MailOutlineOutlinedIcon />
            </a>
            &nbsp; &nbsp;
            <a
              href="https://instagram.com/sahil_b_sawant?igshid=MzNlNGNkZWQ4Mg=="
              target="blank"
              className=" text-white "
            >
              <InstagramIcon />
            </a>
            &nbsp; &nbsp;
            <a
              className="text-white"
              href="https://api.whatsapp.com/send?phone=8268172899"
              target="blank"
            >
              <WhatsAppIcon />
            </a>
            &nbsp; &nbsp;
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
