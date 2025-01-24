import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TypingEffect from "../components/TypingEffect";
import emailjs from "@emailjs/browser";

//headshot images
import headshot from "../assets/images/headshot_circle.png";

//work images
import commentWriter from "../assets/images/recent_work/commentwriter_color.png";
import funway from "../assets/images/recent_work/funway_color.png";
import funwayCity from "../assets/images/recent_work/funwaycity_color.png";
import oem from "../assets/images/recent_work/oemheaters_color.png";

//icons
import call from "../assets/icons/call.png";
import mail from "../assets/icons/gmail.png";

import github from "../assets/icons/github_square.svg";
import linkedIn from "../assets/icons/linkedin_square.svg";
import { ReactComponent as GitHubSvg } from "../assets/icons/github.svg";
import { ReactComponent as LinkedInSvg } from "../assets/icons/linkedin.svg";
import { ReactComponent as MailSvg } from "../assets/icons/mail.svg";
import { ReactComponent as PdfSvg } from "../assets/icons/pdf.svg";
import { ReactComponent as TelegramSvg } from "../assets/icons/telegram.svg";

import RotatingIcons from "../components/RotatingIcons";
import {
  SiReact,
  SiBootstrap,
  SiJquery,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiWix,
  SiUpwork
} from "react-icons/si";

function Home() {
  const [disabled, setDisabled] = useState(false);

  const floatingIcons = [
    <SiReact title="React.js" />,
    <SiJquery title="jQuery" />,
    <SiHtml5 title="HTML" />,
    <SiCss3 title="CSS" />,
    <SiJavascript title="Javascript" />,
  ];

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
              <h1 class="white m-2">{TypingEffect("Will Rankin", 50)}</h1>
            </div>

            <div class="bann-img-col col-lg-5 col-md-12 ">
              <div class="bann-img my-5 mx-lg-5 mx-auto fadeIn">
                <RotatingIcons duration={120} icons={floatingIcons} />
                <figure>
                  <img src={headshot} alt="#" />
                </figure>
              </div>
            </div>

            <div class="col-lg-7">
              <div class="p-2">
                <h2 class="mb-5 white">
                  {TypingEffect(
                    "Full-Stack Developer, Teacher, Explorer",
                    50,
                    750
                  )}
                </h2>
                <div class="mt-5 mb-3">
                  <p class="text">
                    Experienced developer with a global perspective,
                    <br />
                    ready to re-engage in impactful tech projects. <br />
                    Connect via{" "}
                    <Link className="work_link" to="/home#contact">
                      Quick Contact
                    </Link>{" "}
                    or the links below.
                  </p>
                </div>
                <div class="d-flex">
                  <div class="socials d-inline-flex p-2 mb-4 mx-lg-0 mx-auto">
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
                        href="https://t.me/chillwill749"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <TelegramSvg />
                      </a>
                    </div>
                    <div class="p-3">
                      <a
                        href="https://www.upwork.com/freelancers/~0173009a7c75a7ccc8"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <SiUpwork />
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
                </div>
                <div class="row d-flex px-4">
                  <a
                    target="_blank"
                    class="big-button mx-lg-0 mx-auto"
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
            <WorkCol
              title="Student Comment Writer"
              img={commentWriter}
              link="/commentwriter"
              gitHub="https://github.com/wrankin1101/comment-writer"
              techUsed={["React.js", "Bootstrap", "jQuery", "HTML/CSS"]}
              desc={
                <p>
                  Created an intuitive comment writing application to increase
                  quarterly reporting speed for teachers by up to 50%
                </p>
              }
            />
            <WorkCol
              title="Custom Product Creator"
              img={oem}
              link="/heaterdemo"
              gitHub="https://github.com/wrankin1101/configure-heater"
              techUsed={[
                "React.js",
                "Bootstrap",
                "jQuery",
                "jQueryUI",
                "HTML/CSS",
              ]}
              desc={
                <>
                  <p>
                    Created web apps that allowed users to create custom
                    products, which increased sales and created leads.
                  </p>
                  <p>Recently redone in React.js as a learning exercise.</p>
                  <p>
                    You can view original jQuery apps{" "}
                    <a
                      href="https://www.oemheaters.com/configurators/sr/config.aspx"
                      target="_blank"
                      class="work_link"
                      rel="noreferrer"
                    >
                      here
                    </a>
                    .
                  </p>
                </>
              }
            />
          </div>
          <div class="pb-5">
            <h3 class="white">Websites</h3>
          </div>
          <div class="row">
            <WorkCol
              title="English Academy Website"
              img={funway}
              link="https://funway.co.kr"
              isExternalLink={true}
              techUsed={["CreatorLink", "HTML/CSS"]}
              desc={
                <p>
                  Worked with business owner to design and create a website
                  using the full-service builder{" "}
                  <a
                    href="https://creatorlink.com"
                    target="_blank"
                    class="work_link"
                    rel="noreferrer"
                  >
                    CreatorLink
                  </a>
                  . This led to an increase in recruitment and parent
                  interaction.
                </p>
              }
            />
            <WorkCol
              title="English Academy Student Dashboard"
              img={funwayCity}
              link=""
              techUsed={["Wix", "Wix Velo", "Javascript", "HTML/CSS"]}
              desc={
                <p>
                  Utilized Wix and Wix Velo to create a dashboard for students
                  and parents to track progress in an intuitive responsive
                  design.
                </p>
              }
            />
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
    isExternalLink = false,
    gitHub = "",
    techUsed,
    desc,
  } = props;

  return (
    <div class="col-md-6 work-col d-flex-column px-4">
      <div>
        <div class="work_pic">
          {link !== "" ? (
            <Link
              to={link}
              target={isExternalLink ? "_blank" : "_self"}
              rel="noreferrer"
            >
              <img src={img} alt="#" />
              <div className="overlay">
                <button>View</button>
              </div>
            </Link>
          ) : (
            <img src={img} alt="#" />
          )}
        </div>
        <div class="d-flex flex-wrap">
          <div className="flex-grow-1 py-2">
            {link !== "" ? (
              <Link
                to={link}
                className="work_link"
                target={isExternalLink ? "_blank" : "_self"}
                rel="noreferrer"
              >
                <h3>{title}</h3>
              </Link>
            ) : (
              <h3>{title}</h3>
            )}
          </div>
          {gitHub !== "" && (
            <Link
              to={gitHub}
              className="github_bubble mx-4"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubSvg />
            </Link>
          )}
        </div>

        {desc}
      </div>

      <div class="tech_used d-flex flex-wrap pt-5 align-self-end">
        {techUsed.map((tech, index) => (
          <div key={index} class="tech_bubble">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
