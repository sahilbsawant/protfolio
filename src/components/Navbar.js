import React, { useState } from "react";
import "./Navbar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";

import { MdClose } from "react-icons/md";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleNav = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="">
        <nav className="navbar fixed-top navbar-expand-lg bg-black  ">
          <div className="container-fluid">
            <a
              href="/"
              className="navbar-brand text-white "
              style={{
                fontWeight: "bold",
                WebkitTextStroke: "0.3px #0d6efd  ",
              }}
            >
              WEB HOME
            </a>

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
            <humberger className=" display-xs-none mqshow ">
              {show ? (
                <MdClose
                  style={{ color: "white", fontSize: "28px" }}
                  onClick={toggleNav}
                ></MdClose>
              ) : (
                <MenuIcon
                  style={{ color: "white", fontSize: "30px" }}
                  onClick={toggleNav}
                ></MenuIcon>
              )}
            </humberger>
            <div className="hide">
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
          </div>
        </nav>
        <div
          style={{
            paddingTop: "80px",
            padding: "80px",
            backgroundColor: "black",
            opacity: "",
            height: "100vh",
            width: "100%",

            position: "fixed",
            zIndex: "99",
          }}
          className={` text-white text-center  ${
            show === false ? "hideCanva" : ""
          }`}
        >
          <div className="menunavbar">
            <ul className="navbar-nav ">
              <li className="navspace">
                <NavLink
                  className="mt-5 text-white text-decoration-none"
                  to="/"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  HOME
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="navspace">
                <NavLink
                  className=" mt-5 text-white text-decoration-none "
                  to="/About"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  ABOUT
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="navspace">
                <NavLink
                  className="mt-5 text-white text-decoration-none"
                  to="/Services"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  SERVICES
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="navspace">
                <NavLink
                  className="mt-5 text-white text-decoration-none"
                  to="/Resume"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  RESUME
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="navspace">
                <NavLink
                  className="mt-5 text-white text-decoration-none "
                  to="/Gallery"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  GALLERY
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="navspace">
                <NavLink
                  className=" text-white text-decoration-none"
                  to="/Contact"
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-5 " style={{ paddingLeft: "12px" }}>
            <a
              className="text-white"
              href="https://www.linkedin.com/in/sahil-sawant-4bb825217/"
              target="blank"
            >
              <LinkedInIcon style={{ fontSize: "38px" }} />
            </a>
            &nbsp; &nbsp; &nbsp;
            <a
              className="text-white"
              href="mailto:sbsawant358@gmail.com"
              target="blank"
            >
              <MailOutlineOutlinedIcon style={{ fontSize: "38px" }} />
            </a>
            &nbsp; &nbsp; &nbsp;
            <a
              href="https://instagram.com/sahil_b_sawant?igshid=MzNlNGNkZWQ4Mg=="
              target="blank"
              className=" text-white "
            >
              <InstagramIcon style={{ fontSize: "38px" }} />
            </a>
            &nbsp; &nbsp; &nbsp;
            <a
              className="text-white"
              href="https://api.whatsapp.com/send?phone=8268172899"
              target="blank"
            >
              <WhatsAppIcon style={{ fontSize: "38px" }} />
            </a>
            &nbsp; &nbsp; &nbsp;
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
