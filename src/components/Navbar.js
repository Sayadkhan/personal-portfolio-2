import { HashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";

const Navbar = () => {
  return (
    <nav className="flex justify-between container mx-auto mt-20 uppercase">
      <div className="logo">
        <HashLink className="link-item" smooth to="#home">
          Abdullah Al Sayad
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <HashLink smooth to="#home" className="link-item">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#projects" className="link-item">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#skills" className="link-item">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#about" className="link-item">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="#contact" className="link-item">
            contact
          </HashLink>
        </li>
        <li>
          <a
            className="link-item"
            href="https://www.google.com"
            target="-blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
