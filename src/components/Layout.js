import React, { useEffect, useState } from "react";
import { scrollToTop } from "../components/Utils";
import "../styles/tailwind-output.css";

import Navbar from "./Navbar";

//images
import triangle from "../assets/images/triangle_cropped.png";
import { ReactComponent as GitHubSvg } from "../assets/icons/github.svg";

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
                <p className="home-text py-2">
                  &copy; {currentYear} Will Rankin. All rights reserved.
                </p>
                <p className="home-text py-2">
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

export default Layout;
