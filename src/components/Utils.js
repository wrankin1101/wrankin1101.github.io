import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { ReactComponent as Info } from "../assets/icons/info.svg";

export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

export function InfoBubble({ message, color='black' }) {
    return (
      <OverlayTrigger overlay={<Tooltip>{message}</Tooltip>}>
        <Info color={color} className="infoBubble mx-1 inline"/>
      </OverlayTrigger>
    );
  }