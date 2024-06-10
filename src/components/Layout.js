import React, { useEffect, useState } from "react";
import { scrollToTop } from "../components/Utils";

//images
import triangle from "../assets/images/trianglecropped.png";
import logo from "../assets/images/icon192.png";
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
          <nav className="navbar navbar-expand-md p">
            <Link className="navbar-brand" to="/home">
              <div className="logo">
                <img src={logo} alt="#" style={{ width: "64px" }} />
              </div>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggle"
              aria-controls="navbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <div className="hamburger"></div>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggle">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/home#work">
                    My Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/home#contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/*  end header  */}
      {/*  background  */}
      <div id="cylinder1" className="cylinder"></div>
      <div id="cylinder2" className="cylinder"></div>
      <div id="cylinder3" className="cylinder"></div>
      <div
        id="back-to-top"
        className={`fade-in-element ${backToTop ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <img alt="back to top" src={triangle} />
      </div>

      <main>{children}</main>

      <footer>
        <div className="copyright">
          <div className="container p-3">
            <div className="row">
              <div className="col-md-12">
                <p className="py-2">
                  &copy; {currentYear} Will Rankin. All rights reserved.
                </p>
                <p className="py-2">
                <a
                    href="https://html.design/demo/bluene/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Template
                  </a>
                  {" "}by{" "}
                  <a
                    href="https://html.design/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HTML Design
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
