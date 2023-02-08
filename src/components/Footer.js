import { useRef } from "react";
import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";
import { useFooterReveal } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useFooterReveal(footerRef);
  return (
    <footer className="my-40 text-center text-white/50 overflow-hidden">
      <p ref={footerRef}>
        &copy; {new Date().getFullYear}
        <HashLink
          smooth
          to="#home"
          className="link-item hover:text-white duration-500"
        >
          Abdullah Al Sayad
        </HashLink>
        . crated by your truly
      </p>
    </footer>
  );
};

export default Footer;
