import { Link } from "react-router-dom";
import BullseyeButton from "../bullsey/BulleyseButton.tsx"

const Header = () => {
  return (
    <header className="relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center">

        {/* Logo */}
        <Link to="/">
          <img
            src="/assets/BluvodigitalLogo.png"
            alt="Bluvo Digital"
            className="w-[109px] h-[57px] object-cover"
          />
        </Link>

        {/* Right side */}
        <div className="flex flex-1 justify-end items-center gap-8">
   <nav className="hidden lg:flex items-center gap-8 text-sm">
  <Link to="/services" className="nav-link">Services</Link>
  <Link to="/about" className="nav-link">About</Link>
  <Link to="/case-studies" className="nav-link">Case Studies</Link>
  <Link to="/resources" className="nav-link">Resources</Link>
  <Link to="/blog" className="nav-link">Blog</Link>
  <Link to="/contact" className="nav-link">Contact</Link>
</nav>

<BullseyeButton
  to="/contact"
  hoverLabel="Book a call"
>
  Get Started
</BullseyeButton>



        </div>
      </div>
    </header>
  );
};

export default Header;
