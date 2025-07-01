import React, { useEffect, useState } from "react";
import { scrollToTop } from "../components/Utils";
import "../styles/tailwind-output.css";

//images
import triangle from "../assets/images/triangle_cropped.png";
import logo from "../assets/images/logo192.png";
import { ReactComponent as GitHubSvg } from "../assets/icons/github.svg";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const [backToTop, showBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        showBackToTop(true);
      } else {
        showBackToTop(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="container px-4">
          <Navbar />
        </div>
      </header>
      {/*  end header  */}
      {/*  background  */}
      <div id="cylinder1" className="cylinder"></div>
      <div id="cylinder2" className="cylinder"></div>
      <div id="cylinder3" className="cylinder"></div>
      <div
        id="back-to-top"
        className={`m-2 m-sm-3 fade-in-element ${backToTop ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <img alt="back to top" src={triangle} />
      </div>

      <main>{children}</main>

      <footer>
        <section className="copyright">
          <div className="container py-3 px-5">
            <div className="row">
              <div className="col-md-12">
                <p className="py-2">
                  &copy; {currentYear} Will Rankin. All rights reserved.
                </p>
                <p className="py-2">
                  <a
                    href="https://github.com/wrankin1101/wrankin1101.github.io"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubSvg className="mb-1 inline" width="20" /> Source code
                  </a>
                  . Inspiration from{" "}
                  <a
                    href="https://html.design/demo/bluene/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HTML Design
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};
function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeAllDropdowns = () => {
    setMobileNavOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const navLinks = [
    { label: "My Work", to: "/home#work" },
    { label: "Contact", to: "/home#contact" },
    {
      label: "Apps",
      links: [
        { label: "Comment Writer", to: "/commentwriter" },
        { label: "Product Creator", to: "/heaterdemo" },
      ],
    }/*, Uncomment if you want to add Design to HTML link
    {
      label: "Sites",
      links: [
        { label: "Design to Html", to: "/designtohtml" },
      ],
    },*/
  ];

  useEffect(() => {
    if (!mobileNavOpen) {
      closeAllDropdowns();
    }
  }, [mobileNavOpen]);

  const renderLinks = (isMobile = false) => (
    <>
      {navLinks.map((item, index) =>
        !item.links ? (
          <li className="nav-item" key={item.label}>
            <Link
              className="nav-link"
              to={item.to}
              onClick={closeAllDropdowns}
            >
              {item.label}
            </Link>
          </li>
        ) : (
          <li className="nav-item dropdown" key={item.label}>
            <button
              className="nav-link dropdown-toggle"
              onClick={() => handleDropdown(item.label)}
              type="button"
            >
              {item.label}
            </button>
            {openDropdown === item.label && (
              <ul className={`dropdown-list py-2 rounded ${isMobile ? "static ml-2" : "absolute ml-8"}`}>
                {item.links.map((sub, subIdx) => (
                  <li key={sub.label}>
                    <Link
                      className="nav-link"
                      to={sub.to}
                      onClick={closeAllDropdowns}
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        )
      )}
    </>
  );

  return (
    <nav className="py-3">
      <div className="w-full px-2 flex">
        <Link
          to="/home"
          className="flex flex-1 md:flex-initial items-center"
          onClick={closeAllDropdowns}
        >
          <div className="logo">
            <img src={logo} alt="#" style={{ width: "64px" }} />
          </div>
        </Link>
        <div className="hidden md:flex md:flex-1">
          <ul className="flex flex-col px-3 mb-0 items-center md:flex-row">
            {renderLinks()}
          </ul>
        </div>

        <button 
        className="px-3 text-xl ml-auto md:collapse" 
        type="button"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
          <span className="inline-block w-6 align-middle">
            <div className="bg-white h-1 my-1.5"></div>
            <div className="bg-white h-1 my-1.5"></div>
            <div className="bg-white h-1 my-1.5"></div>
          </span>
        </button>
        {/* Mobile Nav (floating, right) */}
        {mobileNavOpen && (
          <div className="fixed top-0 right-0 h-full w-64 bg-black shadow-lg z-50 md:hidden transition-transform duration-200 flex flex-col">
            <button
              className="closeButton absolute top-0 right-4 p-1 bold"
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="flex flex-col mt-16 space-y-2 pt-4">
              {renderLinks(true)}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Layout;
