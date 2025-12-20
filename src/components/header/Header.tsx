import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center">

        {/* Logo (left) */}
        <Link to="/">
          <img
            src="/assets/BluvodigitalLogo.png"
            alt="Bluvo Digital"
            className="w-[109px] h-[57px] object-cover"
          />
        </Link>

        {/* RIGHT SIDE (Nav + CTA) */}
        <div className="flex flex-1 justify-end items-center gap-8">

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-300">
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/case-studies" className="hover:text-white">Case Studies</Link>
            <Link to="/resources" className="hover:text-white">Resources</Link>
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </nav>

          {/* CTA */}
          <Link
            to="/contact"
            className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200"
          >
            Get Started
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
