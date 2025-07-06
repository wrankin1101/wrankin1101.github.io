import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ClickyTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.clicky) {
        const path = window.location.hash || window.location.pathname;
      window.clicky.log(
        path,
        document.title,
        'pageview'
      );
      //console.log(`Clicky tracking: ${path} - ${document.title}`);
    }
  }, [location]);

  return null;
}
export default ClickyTracker;