import { Link } from "react-router-dom";
import TypingEffect from "../components/TypingEffect";
import emailjs from "@emailjs/browser";

//images
import spinTriangle from "../assets/images/triangle of justice_skinny.png";
import headshot from "../assets/images/notriangle.png";
import commentWriter from "../assets/images/recent_work/commentwriter_color.png";
import funway from "../assets/images/recent_work/funway_color.png";
import funwayCity from "../assets/images/recent_work/funwaycity_color.png";
import oem from "../assets/images/recent_work/oemheaters_color.png";
import call from "../assets/images/call.png";
import linkedIn from "../assets/images/linkedin.svg";
import mail from "../assets/images/gmail.png";
import github from "../assets/images/square-github.svg";

import { ReactComponent as GitHubSvg } from "../assets/icons/github.svg";
import { ReactComponent as LinkedInSvg } from "../assets/icons/linkedin.svg";
import { ReactComponent as MailSvg } from "../assets/icons/mail.svg";
import { ReactComponent as PdfSvg } from "../assets/icons/pdf.svg";
import { useEffect, useState } from "react";

function Home() {
  const [disabled, setDisabled] = useState(false);

  const sendEmail = () => {
    // Disable the submit button
    setDisabled(true);

    emailjs
      .sendForm("service_67u8idz", "template_nxeee59", "#contact-form")
      .then(
        function (response) {
          console.log("Email sent successfully:", response);
          alert("Email sent successfully!");
        },
        function (error) {
          console.error("Error sending email:", error);
          alert("Error sending email.");
        }
      )
      .finally(function () {
        // Re-enable the submit button
        setDisabled(false);
      });
  };
  useEffect(() => {
    emailjs.init("_hi0eg09Dya9qi5rF");
  }, []);

  return (
    <>
      {/*  banner  */}
      <section class="banner_main pt-5 fadeIn">
        <div class="container px-4">
          <div class="row d-flex">
            <div class="col-lg-7 align-self-center">
              <h1 class="white m-2">{TypingEffect("Will Rankin", 80)}</h1>
            </div>

            <div class="bann-img-col col-lg-5 col-md-12">
              <div class="bann-img m-5">
                <div class="triangle">
                  <img src={spinTriangle} alt="#" className="fadeIn" />
                </div>
                <figure>
                  <img src={headshot} alt="#" className="fadeIn" />
                </figure>
              </div>
            </div>

            <div class="col-lg-7">
              <div class="p-2">
                <h2
                  class="mb-5 white"
                  style={{
                    minHeight: "110px",
                  }}
                >
                  {TypingEffect("Full-Stack Developer, Teacher, Explorer", 80)}
                </h2>
                <div class="mt-5 mb-3">
                  <p class="text">
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
                <div class="socials d-flex flex-row p-2 mb-4">
                  <div class="p-3">
                    <a
                      href="https://github.com/wrankin1101"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubSvg />
                    </a>
                  </div>
                  <div class="p-3">
                    <a
                      href="https://www.linkedin.com/in/will-rankn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedInSvg />
                    </a>
                  </div>
                  <div class="p-3">
                    <a
                      href="mailto:wrankin1101@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MailSvg />
                    </a>
                  </div>
                </div>
                <a
                  target="_blank"
                  class="big-button"
                  href="https://drive.google.com/file/d/155HY4my4mZl1IAD_-V7XuTdNIjqKEVki/view?usp=sharing"
                  rel="noreferrer"
                >
                  <PdfSvg />
                  &nbsp;&nbsp;Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  end banner  */}
      {/*  work  */}
      <section id="work" class="work fadeIn">
        <div class="container px-4">
          <div class="row spacer"></div>
          <div class="pb-5">
            <h3 class="white">Apps</h3>
          </div>
          <div class="row">
            <div class="col-md-6 work-col d-flex-column">
              <div class="work_pic">
                <figure>
                  <Link to="/commentwriter">
                    <img src={commentWriter} alt="#" />
                  </Link>
                </figure>
              </div>
              <Link to="/commentwriter" className="work_link">
                <h3>Student Comment Writer</h3>
              </Link>
              <p>
                Created an intuitive comment writing application to increase
                quarterly reporting speed for teachers by up to 50%
              </p>
              <p class="tech_used d-flex flex-wrap pt-5 align-self-end">
                  <div class="tech_bubble">
                  React.js
                  </div>
                  <div class="tech_bubble">
                  Bootstrap
                  </div>
                  <div class="tech_bubble">
                  jQuery
                  </div>
                  <div class="tech_bubble">
                  HTML/CSS
                  </div>
              </p>
            </div>
            <div class="col-md-6 work-col d-flex-column">
              <div class="work_pic">
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
              <Link to="/heaterdemo" className="work_link">
                <h3>Custom Product Creator App</h3>
              </Link>
              <p>
                Created jQuery apps that allowed users to create custom
                products, which increased sales and created leads.
              </p>
              <p>Recently redone in React.js as a learning exercise.</p>
              <p class="tech_used d-flex flex-wrap pt-5 align-self-end">
                  <div class="tech_bubble">
                  React.js
                  </div>
                  <div class="tech_bubble">
                  Bootstrap
                  </div>
                  <div class="tech_bubble">
                  jQuery
                  </div>
                  <div class="tech_bubble">
                  jQueryUI
                  </div>
                  <div class="tech_bubble">
                  HTML/CSS
                  </div>
              </p>
            </div>
          </div>
          <div class="pb-5">
            <h3 class="white">Websites</h3>
          </div>
          <div class="row">
            <div class="col-md-6 work-col d-flex-column">
              <div class="work_pic">
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
              <p class="tech_used d-flex flex-wrap pt-5 align-self-end">
                  <div class="tech_bubble">
                  <a
                  href="https://creatorlink.com"
                  target="_blank"
                  class="work_link"
                  rel="noreferrer"
                >
                  CreatorLink
                </a>
                  </div>
                  <div class="tech_bubble">
                  HTML/CSS
                  </div>
              </p>
            </div>
            <div class="col-md-6 work-col d-flex-column">
              <div class="flex-grow-1">
              <div class="work_pic">
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
              </div>
              <p class="tech_used d-flex flex-wrap pt-5 align-self-end" >
                  <div class="tech_bubble">
                  <a
                  href="https://wix.com"
                  target="_blank"
                  class="work_link"
                  rel="noreferrer"
                >
                  Wix
                </a>
                  </div>
                  <div class="tech_bubble">
                  Wix Velo
                  </div>
                  <div class="tech_bubble">
                  Javascript
                  </div>
                  <div class="tech_bubble">
                  HTML/CSS
                  </div>
              </p>
              
            </div>
          </div>
        </div>
      </section>
      {/*  end work  */}
      {/*   contact  */}
      <section id="contact" class="contact fadeIn">
        <div class="container px-4">
          <div class="row spacer"></div>
          <div class="row">
            <div class="col-md-6"></div>
            <div class="col-md-6"></div>
          </div>
          <div class="row">
            <div class="col-lg-6 pb-5">
              <div class="pb-5">
                <h3 class="white">Let’s Talk </h3>
              </div>
              <div class="contact-links">
                <ul>
                  <li>
                    <img src={call} alt="#" />
                    +1 952 454 2310
                  </li>
                  <li>
                    <img src={call} alt="#" />
                    +82 010 2962 5589
                  </li>
                  <li>
                    <a
                      href="mailto:wrankin1101@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <img src={mail} alt="#" />
                      wrankin1101@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/will-rankn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <img src={linkedIn} alt="#" />
                      linkedin.com/in/will-rankn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/wrankin1101"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <img src={github} alt="#" />
                      github.com/wrankin1101
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="pb-5">
                <h3 class="white">Quick Contact </h3>
              </div>
              <form method="post" id="contact-form">
                <div class="row">
                  <div class="col-md-6 col-sm-12">
                    <div class="form-group pb-3">
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        id="name"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <div class="form-group pb-3">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="col-12 pb-3">
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
                <div class="d-flex">
                  <button
                    disabled={disabled}
                    class="big-button"
                    onClick={sendEmail}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/*   end contact  */}
    </>
  );
}
function WorkCol(props) {
  const {
    title,
    img,
    link,
    externalLink = "",
    techUsed,
    desc,
  } = props;
  
  return (
    <div class="col-md-6 work-col d-flex-column">
              <div class="work_pic">
                <figure>
                  <a
                    href="https://funway.co.kr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={img} alt="#" />
                  </a>
                </figure>
              </div>
              <a
                href="https://funway.co.kr"
                target="_blank"
                class="work_link"
                rel="noreferrer"
              >
                <h3>{title}</h3>
              </a>
              {desc}
              <p class="tech_used d-flex flex-wrap pt-5 align-self-end">
                  <div class="tech_bubble">
                  <a
                  href="https://creatorlink.com"
                  target="_blank"
                  class="work_link"
                  rel="noreferrer"
                >
                  CreatorLink
                </a>
                  </div>
                  <div class="tech_bubble">
                  HTML/CSS
                  </div>
              </p>
            </div>
  );
}

export default Home;
