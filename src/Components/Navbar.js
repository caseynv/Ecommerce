import { useState } from "react";
import hamburger from "../Images/icon-menu.svg";
import logo from "../Images/logo.svg";
import cart from "../Images/icon-cart.svg";
import user from "../Images/icon-avatar.svg";



export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-white mb-3">
        <div className="container px-4 mx-auto flex justify-between flex-wrap items-center">
            <div className=" relative flex lg:w-auto lg:static lg:block lg:justify-start">
                <button
                className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden md:mr-auto outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
                >
                <img src={hamburger} alt="hamburger"/>
                </button>
                <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 ml-0 py-2 whitespace-nowrap uppercase text-white"
                href="#pablo"
                >
                <img src={logo} alt="logo" />
                </a>
            </div>

            <div
                className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
                }
                id="example-navbar-danger"
            >
                <ul className="flex flex-col lg:flex-row list-none lg:mr-auto">
                <li className="nav-item">
                    <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                    >
                    <span className="ml-2">Share</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                    >
                    <span className="ml-2">Tweet</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    href="#pablo"
                    >
                    <span className="ml-2">Pin</span>
                    </a>
                </li>
                </ul>
            </div>
            <div className="flex">
                <div>
                  <img src={cart} alt="cart" />
                </div>
                <div>
                  <img src={user} alt="user" />
                </div> 
            </div>
        </div>
      </nav>
    </>
  );
}
