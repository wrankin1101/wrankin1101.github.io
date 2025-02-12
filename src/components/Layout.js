import React, { useEffect, useState } from "react";
import { scrollToTop } from "../components/Utils";

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
          <nav className="navbar navbar-expand-md">
            <div class="container-fluid">
              <Link className="navbar-brand" to="/home">
                <div className="logo">
                  <img src={logo} alt="#" style={{ width: "64px" }} />
                </div>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon">
                  <div className="hamburger"></div>
                  <div className="hamburger"></div>
                  <div className="hamburger"></div>
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto">
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
                  <li class="nav-item dropdown">
                    <button
                      class="nav-link dropdown-toggle"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Apps
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="nav-link" to="/commentwriter">
                        Comment Writer
                      </Link>
                      <Link className="nav-link" to="/heaterdemo">
                        Custom Product Creator
                      </Link>
                    </ul>
                  </li>
                  
                </ul>
              </div>
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
          <div className="container mx-5 py-3">
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
                    <GitHubSvg className="mb-1" width="20"/>
                    {" "}Source code
                  </a>
                  .{" "}
                  
                    Inspiration{" "}
                  from{" "}
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
        </div>
      </footer>
    </>
  );
};

export default Layout;
