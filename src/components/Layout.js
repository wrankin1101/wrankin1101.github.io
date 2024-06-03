import React, { useEffect, useState } from "react";

//images
import triangle from "../assets/images/trianglecropped.png";
import logo from "../assets/images/icon192.png";

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header>
        <div class="container px-4">
          <nav class="navbar navbar-expand-md p">
            <a class="navbar-brand" href="/">
              <div class="logo">
                <img src={logo} alt="#" style={{ width: "64px" }} />
              </div>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggle"
              aria-controls="navbarToggle"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <div class="hamburger"></div>
                <div class="hamburger"></div>
                <div class="hamburger"></div>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggle">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#work">
                    My Work
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      {/*  end header  */}
      {/*  background  */}
      <div id="cylinder1" class="cylinder"></div>
      <div id="cylinder2" class="cylinder"></div>
      <div id="cylinder3" class="cylinder"></div>
      <div
        id="back-to-top"
        className={`fade-in-element ${backToTop ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <img alt="back to top" src={triangle} />
      </div>

      <main>{children}</main>

      <footer>
        <div class="copyright">
          <div class="container p-2">
            <div class="row">
              <div class="col-md-12">
                <p class="py-2">
                  &copy; {currentYear} Will Rankin. All rights reserved.
                </p>
                <p class="py-2">
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
