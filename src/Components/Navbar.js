import { useState } from "react";
import Sidebar from "./Sidebar";
import hamburger from "../Images/icon-menu.svg";
import logo from "../Images/logo.svg";
import cart from "../Images/icon-cart.svg";
import user from "../Images/image-avatar.png";
import PropTypes from 'prop-types';



export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between content-between relative flex-wrap items-center md:px-2 py-3 bg-white mb-3">
        <div className="flex justify-between content-between md:px-4 flex-wrap items-center">
          <div className="flex relative lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-[#68707d] cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden md:mr-auto outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <img src={hamburger} alt="hamburger" />
            </button>
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 ml-0 py-2 whitespace-nowrap uppercase text-white"
              href="#"
            >
              <img src={logo} alt="logo" />
            </a>
          </div>
          {navbarOpen ? <Sidebar opennav={navbarOpen} /> : " "}

          <div
            className="lg:flex flex-grow items-center hidden"
            id="example-navbar-danger"
          >
            <ul className="flex text-[#68707d] flex-col lg:flex-row list-none text-black mr-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                  href="#"
                >
                  <span className="ml-2 text-[#68707d]">Collections</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                  href="#"
                >
                  <span className="ml-2 text-[#68707d]">Men</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                  href="#"
                >
                  <span className="ml-2 text-[#68707d]">Women</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                  href="#"
                >
                  <span className="ml-2 text-[#68707d]">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs font-bold leading-snug hover:opacity-75"
                  href="#"
                >
                  <span className="ml-2 text-[#68707d]">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex">
          <div className="mx-4">
            <img src={cart} alt="cart" />
          </div>
          <div className="mx-4">
            <img className="h-6 w-6" src={user} alt="user" />
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  opennav: PropTypes.bool
}