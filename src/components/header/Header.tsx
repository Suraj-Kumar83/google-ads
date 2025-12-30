import { Link } from "react-router-dom";
import BullseyeButton from "../bullsey/BulleyseButton.tsx";

const Header = () => {
  return (
    <header className="relative z-10">
      <div
        className="
          max-w-7xl mx-auto
          px-4 sm:px-6
          py-4 sm:py-6
          flex items-center
        "
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/assets/BluvodigitalLogo.png"
            alt="Bluvo Digital"
            className="
              w-[88px] h-auto
              sm:w-[100px]
              md:w-[109px]
              object-contain
            "
          />
        </Link>

        {/* Right side */}
        <div className="flex flex-1 justify-end items-center gap-4 sm:gap-6 md:gap-8">
          {/* CTA */}
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
