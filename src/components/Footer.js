import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.development";

const Footer = () => {
  return (
    <footer className="my-40 text-center text-white/50 overflow-hidden">
      <p>
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
