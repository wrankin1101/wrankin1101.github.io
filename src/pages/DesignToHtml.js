import { useEffect, useState } from "react";
import TypingEffect from "../components/TypingEffect";
import { scrollToTop } from "../components/Utils";
import "../styles/design.css";


//images
import designImage from "../assets/images/design_to_site/design.png";
import logo from "../assets/images/design_to_site/sample-logo.png";

function DesignToHtml() {
  const [showSite, setShowSite] = useState(false);
  useEffect(() => {
    scrollToTop(); // scroll to top on load
  }, []);
  return (
    <>
      <div className={`DesignToHtml ${showSite ? "show-site" : ""}`}>
        <div className="container px-5 py-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="white pb-4">
                <TypingEffect text="Design to Website" speed={80} />
              </h2>
            </div>
            <div className="col-md-12 text-center">
              <p className="hero-text">
                <div className="mb-4">
                  Transforming your design into a fully functional,{" "}
                  <br className="d-none d-sm-block" />
                  responsive website is <br className="d-sm-none d-block" />
                  <span className="text-[#e70139]">what I do best.</span>
                </div>
                <div className="mb-2 !text-lg font-bold">
                  <span>Bring your vision to life!</span>
                </div>
              </p>
            </div>
            <div className="col-md-12 text-center mb-8">
              <div className="btn-group flex-wrap" role="group">
                <input
                  type="radio"
                  className="btn-check"
                  name="toggleRadio"
                  id="designBtn"
                  value="Rectangle"
                  checked={!showSite}
                  onChange={() => setShowSite(false)}
                />
                <label className="btn btn-outline-danger" htmlFor="designBtn">
                  Design
                </label>
                <input
                  type="radio"
                  className="btn-check"
                  name="toggleRadio"
                  id="siteBtn"
                  autoComplete="off"
                  value="Circle"
                  checked={showSite}
                  onChange={() => setShowSite(true)}
                />
                <label className="btn btn-outline-danger" htmlFor="siteBtn">
                  Website
                </label>
              </div>
            </div>
          </div>
          <div className="designImage flex items-center justify-center fadeIn">
            <img
              src={designImage}
              alt="Design to Website"
              className="img-fluid h-[450px] rounded-xl !shadow-lg shadow-gray-400 hoverable"
            />
          </div>
          <div className="designSite bg-[#F8F7F3] text-[#333] font-['Inter_Tight',_sans-serif] px-8 sm:px-12 py-6 mx-auto max-w-[1200px] rounded-xl relative !shadow-lg shadow-gray-400 fadeIn">
            {/* Header */}
            <header
              class="w-full lg:w-[80%] max-w-[1200px] mx-auto rounded-full shadow-lg bg-white flex justify-between items-center px-8 !py-3 z-20 relative hoverable"
              style={{ "box-shadow": "0 8px 32px rgba(0, 0, 0, 0.1)" }}
            >
              <div class="text-l sm:text-2xl font-light text-gray-800">
                c
                <img
                  src={logo}
                  alt="Compatto Logo"
                  class="w-3 sm:w-5 object-contain inline-block"
                />
                mpatto
              </div>
              <nav class="md:!flex !hidden !gap-2 lg:!gap-3 text-[0.63rem] text-gray-700">
                <span className="cursor-pointer inline">Who we are</span>
                <span className="cursor-pointer inline">The challenges</span>
                <span className="cursor-pointer inline">Our process</span>
                <span className="cursor-pointer inline">Why choose us</span>
              </nav>
              <button class="bg-[#A28565] text-white !px-2 sm:!px-4 !py-2 rounded text-[0.65rem]">
                Contact <span className="sm:!inline !hidden">us</span>
              </button>
            </header>

            {/* Hero Section with Background Image and Text */}
            <section
              class="relative bg-cover bg-center min-h-[500px] -mt-6 rounded-3xl overflow-hidden hoverable"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
              }}
            >
              <div
                class="absolute inset-0"
                style={{ background: "rgba(0, 0, 0, 0.4)" }}
              ></div>
              <div class="relative z-10 text-white w-[80%] mx-auto py-16 flex md:flex-row flex-col md:items-end items-start gap-8 lg:gap-16 h-[500px]">
                <div class="flex-[1.2_1_0%] text-2xl sm:text-4xl leading-tight py-2 font-light">
                  Bringing <span class="text-[#e0d8c8]">Simplicity</span>
                  <br />
                  In The Furnishing Market
                </div>
                <div class="flex-[.8_1_0%] flex flex-col items-start">
                  <div class="mt-0 text-[12px] sm:text-[14px] font-light max-w-md leading-relaxed">
                    Compatto simplifies the complex process of furnishing
                    all-inclusive boutique & high-end hotels, and luxury
                    residences in Greece & Cyprus.
                  </div>
                  <button class="mt-3 !px-5 py-2 sm:!text-[14px] !text-[10px] rounded btn-gradient">
                    Start Your Furnishing Journey
                  </button>
                </div>
              </div>
            </section>

            {/* Stats & About Section */}
            <section class="flex md:flex-row flex-col lg:w-[80%] w-full  gap-8 py-8 bg-[#F8F7F3] min-h-[230px] items-center mx-auto">
              <div class="bg-white !p-4 rounded-xl shadow flex flex-col min-h-[230px] justify-between flex-shrink-0 md:w-1/3 max-w-[300px] numbers-section text-white hoverable">
                {/* Top row: "Our Numbers" and image */}
                <div class="flex flex-row items-start justify-between">
                  <span class="font-light text-[10px] leading-tight">
                    OUR COMPANY <br />
                    IN NUMBERS
                  </span>
                  <img
                    src={logo}
                    alt="Compatto Logo"
                    class="w-[50%] object-contain -mt-4 filter invert opacity-60"
                  />
                </div>
                {/* Bottom row: stats */}
                <div class="flex flex-row items-end justify-between w-full font-light gap-8">
                  <div class="flex flex-col flex-[1.1] items-start">
                    <div class="text-4xl">150+</div>
                    <div class="text-sm">Furniture Suppliers</div>
                  </div>
                  <div class="flex flex-col flex-[0.9] items-start">
                    <div class="text-lg">15+</div>
                    <div class="text-xs">Years of Industry Experience</div>
                  </div>
                </div>
              </div>
              <div class="flex flex-row items-stretch bg-[#efebe2] text-black rounded-xl shadow flex-1 min-h-[230px] hoverable">
                {/* Left: Text content */}
                <div class="flex-1 flex flex-col justify-center !pl-4 !pr-2 sm:!pr-8">
                  <div class="text-xl sm:text-2xl font-lighter mb-3">
                    Who <span style={{ color: "#a88a67" }}>We</span> Are
                  </div>
                  <div class="text-[12px] leading-none sm:text-[10px] sm:leading-3 font-light">
                    At Compatto, we understand the challenges of creating
                    exceptional spaces that blend elegance, quality, and
                    functionality.
                    <div class="mt-2 sm:!block !hidden">
                      As Greece's premier furniture solutions provider, we've
                      made it our mission to simplify the furnishing process,
                      ensuring that every project is executed flawlessly from
                      initial consultation to final installation.
                    </div>
                  </div>
                </div>
                {/* Right: Image with double semicircle border effect */}
                <div class="flex-1 flex flex-col items-center">
                  <div class="flex-1 flex flex-col items-center relative">
                    {/* Gray ellipse background (bottom layer) */}
                    <div class="absolute w-full h-full z-0">
                      <div
                        class="w-full h-full"
                        style={{
                          clipPath: "ellipse(50% 65% at 50% 44%)",
                          background: "#e1d9c8",
                        }}
                      ></div>
                    </div>
                    {/* Bottom image with left inset (rectangular) */}
                    <div class="absolute inset-0 w-full h-full z-0">
                      <img
                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
                        alt="Hands working at desks"
                        class="object-cover w-full h-full rounded-xl"
                        style={{ clipPath: "inset(0 0 0 57%)" }}
                      />
                    </div>
                    {/* Top image with ellipse clip-path, slightly smaller and overlapping */}
                    <div class="relative w-full h-full z-10">
                      <img
                        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
                        alt="Hands working at desks"
                        class="object-cover w-full h-full"
                        style={{ clipPath: "ellipse(50% 62% at 57% 44%)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignToHtml;
