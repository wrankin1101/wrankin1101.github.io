import React, { useEffect, useState } from "react";
import "./App.css";

//images
import triangle from "./assets/images/trianglecropped.png";
import spinTriangle from "./assets/images/triangle of justice_skinny.png";
import headshot from "./assets/images/notriangle.png";
import commentWriter from "./assets/images/recent_work/commentwriter_color.png";
import funway from "./assets/images/recent_work/funway_color.png";
import funwayCity from "./assets/images/recent_work/funwaycity_color.png";
import oem from "./assets/images/recent_work/oemheaters_color.png";
import call from "./assets/images/call.png";
import linkedIn from "./assets/images/linkedin.svg";
import mail from "./assets/images/gmail.png";
import github from "./assets/images/square-github.svg";
import logo from "./assets/images/icon192.png";

function App() {
  const [backToTop, showBackToTop] = useState(false);

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
    <div className="App">
      <header>
        {/*  header inner  */}
        <div class="header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                <div class="full">
                  <div class="center-desk">
                    <div class="logo">
                      <a href="index.html">
                        <img src={logo} alt="#" style={{ width: "64px" }} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                <nav class="navigation navbar navbar-expand-md navbar-dark ">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarsExample04"
                    aria-controls="navbarsExample04"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarsExample04">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item">
                        <a class="nav-link" href="#work">
                          {" "}
                          My Work
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#footer">
                          Contact{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*  end header inner  */}
      {/*  end header  */}
      {/*  banner  */}
      <section class="banner_main">
        <div id="cylinder1" class="cylinder"></div>
        <div id="cylinder2" class="cylinder"></div>
        <div id="cylinder3" class="cylinder"></div>
          <div id="back-to-top" className={`fade-in-element ${backToTop ? 'visible' : ''}`} onClick={scrollToTop}>
            <img alt="back to top" src={triangle} />
          </div>
        <div class="container-fluid">
          <div class="row d_flex">
            <div class="col-md-7">
              <div class="text-bg">
                <div
                  class="padding_lert titlepage"
                  style={{ textAlign: "left", padding: "10px" }}
                >
                  <h1 class="typeIt">{useTypingEffect("Will Rankin", 80)}</h1>
                  <h2
                    class="typeItLoop"
                    style={{
                      color: "white",
                      marginBottom: "30px",
                      minHeight: "110px",
                    }}
                  >
                    {useTypingEffect("Full-Stack Developer, Teacher, Explorer",80)}
                  </h2>
                  <div class="multipurpose">
                    <p>
                      Software developer turned traveler, eager to return to
                      development. <br />
                      If you'd like to collaborate, please send me an email or
                      reach out via{" "}
                      <a class="work_link" href="mailto:wrankin1101@gmail.com">
                        email
                      </a>{" "}
                      or socials!
                    </p>
                  </div>

                  <br />
                  <div class="socials row p-2 mb-4">
                  <div class="col-1">
                  <a href="https://github.com/wrankin1101" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="none">
    <path d="M10 20.5675C6.57143 21.7248 3.71429 20.5675 2 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10 22V18.7579C10 18.1596 10.1839 17.6396 10.4804 17.1699C10.6838 16.8476 10.5445 16.3904 10.1771 16.2894C7.13394 15.4528 5 14.1077 5 9.64606C5 8.48611 5.38005 7.39556 6.04811 6.4464C6.21437 6.21018 6.29749 6.09208 6.31748 5.9851C6.33746 5.87813 6.30272 5.73852 6.23322 5.45932C5.95038 4.32292 5.96871 3.11619 6.39322 2.02823C6.39322 2.02823 7.27042 1.74242 9.26698 2.98969C9.72282 3.27447 9.95075 3.41686 10.1515 3.44871C10.3522 3.48056 10.6206 3.41384 11.1573 3.28041C11.8913 3.09795 12.6476 3 13.5 3C14.3524 3 15.1087 3.09795 15.8427 3.28041C16.3794 3.41384 16.6478 3.48056 16.8485 3.44871C17.0493 3.41686 17.2772 3.27447 17.733 2.98969C19.7296 1.74242 20.6068 2.02823 20.6068 2.02823C21.0313 3.11619 21.0496 4.32292 20.7668 5.45932C20.6973 5.73852 20.6625 5.87813 20.6825 5.9851C20.7025 6.09207 20.7856 6.21019 20.9519 6.4464C21.6199 7.39556 22 8.48611 22 9.64606C22 14.1077 19.8661 15.4528 16.8229 16.2894C16.4555 16.3904 16.3162 16.8476 16.5196 17.1699C16.8161 17.6396 17 18.1596 17 18.7579V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
</a>
                  </div>
                  <div class="col-1">
                  <a href="https://www.linkedin.com/in/will-rankn" target="_blank" rel="noreferrer">
                  
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                    >
                      <path
                        d="M4.5 9.5H4C3.05719 9.5 2.58579 9.5 2.29289 9.79289C2 10.0858 2 10.5572 2 11.5V20C2 20.9428 2 21.4142 2.29289 21.7071C2.58579 22 3.05719 22 4 22H4.5C5.44281 22 5.91421 22 6.20711 21.7071C6.5 21.4142 6.5 20.9428 6.5 20V11.5C6.5 10.5572 6.5 10.0858 6.20711 9.79289C5.91421 9.5 5.44281 9.5 4.5 9.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M6.5 4.25C6.5 5.49264 5.49264 6.5 4.25 6.5C3.00736 6.5 2 5.49264 2 4.25C2 3.00736 3.00736 2 4.25 2C5.49264 2 6.5 3.00736 6.5 4.25Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                      />
                      <path
                        d="M12.326 9.5H11.5C10.5572 9.5 10.0858 9.5 9.79289 9.79289C9.5 10.0858 9.5 10.5572 9.5 11.5V20C9.5 20.9428 9.5 21.4142 9.79289 21.7071C10.0858 22 10.5572 22 11.5 22H12C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20L14.0001 16.5001C14.0001 14.8433 14.5281 13.5001 16.0879 13.5001C16.8677 13.5001 17.5 14.1717 17.5 15.0001V19.5001C17.5 20.4429 17.5 20.9143 17.7929 21.2072C18.0857 21.5001 18.5572 21.5001 19.5 21.5001H19.9987C20.9413 21.5001 21.4126 21.5001 21.7055 21.2073C21.9984 20.9145 21.9985 20.4432 21.9987 19.5006L22.0001 14.0002C22.0001 11.515 19.6364 9.50024 17.2968 9.50024C15.9649 9.50024 14.7767 10.1531 14.0001 11.174C14 10.5439 14 10.2289 13.8632 9.995C13.7765 9.84686 13.6531 9.72353 13.505 9.63687C13.2711 9.5 12.9561 9.5 12.326 9.5Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                    </a>
                  </div>
                  <div class="col-1">
                  <a href="mailto:wrankin1101@gmail.com" target="_blank" rel="noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="none"
                    >
                      <path
                        d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                 </a>
                  </div>
                  </div>
                  <a
                    target="_blank"
                    class="big-button"
                    href="https://drive.google.com/file/d/155HY4my4mZl1IAD_-V7XuTdNIjqKEVki/view?usp=sharing"
                    rel="noreferrer"
                  >
                    
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="none">
    <path d="M7 18V15.5M7 15.5V14C7 13.5286 7 13.2929 7.15377 13.1464C7.30754 13 7.55503 13 8.05 13H8.75C9.47487 13 10.0625 13.5596 10.0625 14.25C10.0625 14.9404 9.47487 15.5 8.75 15.5H7ZM21 13H19.6875C18.8625 13 18.4501 13 18.1938 13.2441C17.9375 13.4882 17.9375 13.881 17.9375 14.6667V15.5M17.9375 18V15.5M17.9375 15.5H20.125M15.75 15.5C15.75 16.8807 14.5747 18 13.125 18C12.7979 18 12.6343 18 12.5125 17.933C12.2208 17.7726 12.25 17.448 12.25 17.1667V13.8333C12.25 13.552 12.2208 13.2274 12.5125 13.067C12.6343 13 12.7979 13 13.125 13C14.5747 13 15.75 14.1193 15.75 15.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M15 22H10.7273C7.46607 22 5.83546 22 4.70307 21.2022C4.37862 20.9736 4.09058 20.7025 3.8477 20.3971C3 19.3313 3 17.7966 3 14.7273V12.1818C3 9.21865 3 7.73706 3.46894 6.55375C4.22281 4.65142 5.81714 3.15088 7.83836 2.44135C9.09563 2 10.6698 2 13.8182 2C15.6173 2 16.5168 2 17.2352 2.2522C18.3902 2.65765 19.3012 3.5151 19.732 4.60214C20 5.27832 20 6.12494 20 7.81818V10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                      
                      &nbsp;&nbsp;Resume
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 m-5 bah">
              <div class="bann_img">
                <div class="triangle">
                  <img src={spinTriangle} alt="#" />
                </div>
                <figure>
                  <img src={headshot} alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  end banner  */}
      {/*  service  */}
      <div id="services" class="service" style={{ display: "none" }}>
        <div class="container-fluid">
          <div class="row d_flex">
            <div class="col-md-5">
              <div class="service_img">
                <figure>
                  <img src="images/pc.png" alt="#" />
                </figure>
              </div>
            </div>
            <div class="col-md-7">
              <div class="titlepage">
                <h2>
                  Full service digital capbilities From end to end workflow
                </h2>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five
                </span>
                <a class="read_more" href="Javascript:void(0)">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  end service  */}
      {/*  solutions  */}
      <div class="solutions" style={{ display: "none" }}>
        <div class="container">
          <div class="row d_flex">
            <div class="col-md-7">
              <div class="titlepage">
                <h2>
                  Solutions for every <br />
                  Specific need
                </h2>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five
                </span>
                <a class="read_more" href="Javascript:void(0)">
                  Read More
                </a>
              </div>
            </div>
            <div class="col-md-5">
              <div class="solutions_img">
                <figure>
                  <img src="images/solusan.png" alt="#" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  end solutions  */}
      {/*  work  */}
      <div id="work" class="work">
        <div class="container">
          <div class="row spacer"></div>
          <div class="titlepage">
            <h3>Apps</h3>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="our_work">
                <figure>
                  <a
                    href="https://storage.googleapis.com/commentwriter/index.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={commentWriter} alt="#" />
                  </a>
                </figure>
              </div>
              <a
                href="https://storage.googleapis.com/commentwriter/index.html"
                target="_blank"
                class="work_link"
                rel="noreferrer"
              >
                <h3>Student Comment Writer - 2021</h3>
              </a>
              <p>
                Created an intuitive comment writing application to increase
                quarterly reporting speed for teachers by up to 50%
              </p>
              <br />
              <h2>Technology Used</h2>
              <p>
                jQuery | Bootstrap |{" "}
                <a
                  href="https://cloud.google.com"
                  target="_blank"
                  class="work_link"
                  rel="noreferrer"
                >
                  Google Cloud
                </a>{" "}
                | HTML | CSS
              </p>
              <br />
              <br />
            </div>
            <div class="col-md-6">
              <div class="our_work">
                <figure>
                  <a
                    href="https://www.oemheaters.com/configurators/sr/config.aspx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={oem} alt="#" />
                  </a>
                </figure>
              </div>
              <a
                href="https://www.oemheaters.com/configurators/sr/config.aspx"
                target="_blank"
                class="work_link"
                rel="noreferrer"
              >
                <h3>Custom Product Creator App - 2015</h3>
              </a>
              <p>
                Created jQuery apps that allowed users to create custom
                products, which increased sales and created leads.
              </p>
              <br />
              <h2>Technology Used</h2>
              <p>jQuery | jQueryUI | HTML | CSS</p>
              <br />
              <br />
            </div>
          </div>
          <div class="titlepage">
            <h3>Websites</h3>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="our_work">
                <figure>
                  <a
                    href="https://funway.co.kr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={funway} alt="#" />
                  </a>
                </figure>
              </div>
              <a
                href="https://funway.co.kr"
                target="_blank"
                class="work_link"
                rel="noreferrer"
              >
                <h3>English Academy Website - 2022</h3>
              </a>
              <p>
                Worked with business owner to design and create a website using
                a full-service builder. This led to an increase in recruitment.
              </p>
              <br />
              <h2>Technology Used</h2>
              <p>
                <a
                  href="https://creatorlink.com"
                  target="_blank"
                  class="work_link"
                  rel="noreferrer"
                >
                  CreatorLink
                </a>{" "}
                | HTML | CSS
              </p>
              <br />
              <br />
            </div>
            <div class="col-md-6">
              <div class="our_work">
                <figure>
                  <a
                    href="https://www.funwaycity.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={funwayCity} alt="#" />
                  </a>
                </figure>
              </div>
              <a
                href="https://www.funwaycity.com/"
                target="_blank"
                class="work_link"
                rel="noreferrer"
              >
                <h3>English Academy Student Dashboard - 2023</h3>
              </a>

              <p>
                Utilized Wix and Wix Velo to create a dashboard for students and
                parents to track progress in an intuitive responsive design.
              </p>
              <br />
              <p>
                Login: <b>wrankin1101@gmail.com</b> <br /> PW: <b>funway1!</b>
              </p>
              <br />
              <h2>Technology Used</h2>
              <p>
                <a
                  href="https://wix.com"
                  target="_blank"
                  class="work_link"
                  rel="noreferrer"
                >
                  Wix
                </a>{" "}
                | Wix Velo | Javascript | HTML | CSS
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      {/*  end work  */}
      {/*   footer  */}
      <footer>
        <div id="footer" class="footer">
          <div class="container">
            <div class="row spacer"></div>
            <div class="row">
              <div class="col-md-6"></div>
              <div class="col-md-6"></div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="titlepage">
                  <h3>Let’s Talk </h3>
                </div>
                <div class="contac_detel">
                  <ul>
                    <li>
                      <img src={call} alt="#" />
                      +1 952 454 2310
                    </li>
                    <li>
                      <img src={call} alt="#" />
                      +82 010 2892 3398
                    </li>
                    <li>
                      <a href="mailto:wrankin1101@gmail.com" target="_blank" rel="noreferrer">
                        {" "}
                        <img src={mail} alt="#" />
                        wrankin1101@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/will-rankn" target="_blank" rel="noreferrer">
                        {" "}
                        <img src={linkedIn} alt="#" />
                        linkedin.com/in/will-rankn
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/wrankin1101" target="_blank" rel="noreferrer">
                        {" "}
                        <img src={github} alt="#" />
                        github.com/wrankin1101
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6">
                <div class="titlepage">
                  <h3>Quick Contact </h3>
                </div>
                <form method="post" id="contact-form">
                  <div class="row">
                    <div class="col-6 col-12-xsmall">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          name="name"
                          id="name"
                          placeholder="Name"
                        />
                      </div>
                    </div>
                    <div class="col-6 col-12-xsmall">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          name="email"
                          id="email"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          name="message"
                          id="message"
                          placeholder="Message"
                          rows="4"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div class="row">
                    <div class="col-12">
                      <ul class="actions text-bg">
                        <li>
                          <input
                            id="submit-button"
                            type="submit"
                            class="big-button"
                            value="Send"
                          />
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="copyright" style={{ display: "none" }}>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <p>
                    Copyright 2020 All Right Reserved By
                    <a href="https://html.design/"> Free Html Templates</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const useTypingEffect = (text, delay = 100, commaPause = 3000) => {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let isCancelled = false; // To handle cleanup

    const typeCharacter = async () => {

      for (let i = 0; i < text.length; i++) {
        if (isCancelled ) return;

        setTypedText(prev => prev + text[i]);

        if (text[i] === ','){
          await blinkCursor(commaPause)
        }
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    };
    async function blinkCursor(msDelay){
      setTypedText(prev => prev + '_');
      await new Promise(resolve => setTimeout(resolve, msDelay));
      setTypedText(prev => prev.substring(0,prev.length-1));
    }

    typeCharacter(); // Start the typing effect

    return () => {
      isCancelled = true; // Cleanup to cancel typing effect if component unmounts
    };
  }, [commaPause, delay, text]);

  return typedText.split("").map((char, index) => (
    char === '_' ?
    <div key={index} class="typecursor">
      &nbsp;&nbsp;
    </div> 
    :
    <div key={index} class="typeletter">
      {char}
    </div>
  ));
};

export default App;
