import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo192.png";

const Navbar = () => {
  // Navigation links
  const navLinks = [
    { label: "My Work", to: "/home#work" },
    { label: "Contact", to: "/home#contact" },
    {
      label: "Apps",
      links: [
        { label: "Comment Writer", to: "/commentwriter" },
        { label: "Product Creator", to: "/heaterdemo" },
      ],
    },
    {
      label: "Sites",
      links: [{ label: "Design to Site", to: "/design" }],
    },
  ];

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const closeAllDropdowns = () => {
    setMobileNavOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

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
            <Link className="nav-link" to={item.to} onClick={closeAllDropdowns}>
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
              <ul
                className={`dropdown-list py-2 rounded ${
                  isMobile ? "static ml-2" : "absolute ml-8"
                }`}
              >
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
};
export default Navbar;
