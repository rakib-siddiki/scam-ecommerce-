import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AosInit: React.FC = () => {
  useEffect(() => {
    AOS.init({
        easing: "ease-out-cubic",
        duration: 1000,
    });
    AOS.refresh();
  }, []);
  return null;
};

export default AosInit;
