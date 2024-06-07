import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import info from "../assets/icons/info.svg"

export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

export function InfoBubble({ message }) {
    return (
      <OverlayTrigger overlay={<Tooltip>{message}</Tooltip>}>
        <img class="infoBubble mx-1" src={info} alt="#" />
      </OverlayTrigger>
    );
  }