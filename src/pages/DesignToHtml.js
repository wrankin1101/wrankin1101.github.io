import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TypingEffect from "../components/TypingEffect";

//work images
import designImage from "../assets/images/design.png";

function DesignToHtml() {
  const [design, setDesign] = useState(true);

  return (
    <>
      <div className="DesignToHtml">
        <div className="container px-5 py-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 class="white pb-4">
                <TypingEffect text="Design to HTML" speed={80} />
              </h2>
              <img
                src={designImage}
                alt="Design to HTML"
                className="img-fluid mb-5"
              />
              <p className="lead">
                This page will contain the content for the Design to HTML
                conversion tool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignToHtml;
