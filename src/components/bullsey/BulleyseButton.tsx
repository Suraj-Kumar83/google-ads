import { useState } from "react";
import { useNavigate } from "react-router-dom";

type BullseyeButtonProps = {
  children: React.ReactNode;
  hoverLabel?: string;
  to?: string;
  onClick?: () => void;
};


const BullseyeButton: React.FC<BullseyeButtonProps> = ({
  children,
  hoverLabel = "Book a call",
  to = "/contact_us",
  onClick,
}) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleClick = (): void => {
    if (onClick) {
      onClick();
    } else {
      navigate(to);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="
        btn-bullseye
        relative inline-flex items-center justify-center
        md:min-w-[170px]
        px-6 md:px-[28px] py-[10px]
        rounded-full
        font-semibold text-[16px] leading-6
        bg-white text-black
        shadow
        transition-[transform,background-color,color]
        duration-300
        focus:outline-none
        focus-visible:ring-2 focus-visible:ring-black/20
        overflow-hidden
      "
      aria-label={typeof children === "string" ? children : "Call to action"}
    >
      {/* Default label */}
      <span
        className={`transition-all duration-200 ${
          hovered
            ? "opacity-0 translate-y-1"
            : "opacity-100 translate-y-0"
        }`}
      >
        {children}
      </span>

      {/* Hover label */}
      <span
        className={`absolute transition-all duration-200 ${
          hovered
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-1"
        }`}
      >
        {hoverLabel}
      </span>

      {/* Bullseye animation */}
      <style>{`
        .btn-bullseye {
          cursor: pointer;
          isolation: isolate;
        }

        .btn-bullseye::before {
          content: "";
          position: absolute;
          inset: 0;
          margin: auto;
          width: 50px;
          height: 50px;
          border-radius: inherit;
          transform: scale(0);
          transition: transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
          z-index: -1;

          background: radial-gradient(
            circle at center,
            #3385e6 0 22%,
            #ffea4d 22% 62%,
            #3385e6 62% 100%
          );
        }

        .btn-bullseye:hover {
          background-color: #3385e6;
          color: #ffffff;
          transform: scale(1.06);
        }

        .btn-bullseye:active {
          transform: scale(1);
        }

        .btn-bullseye:hover::before {
          transform: scale(14.2);
        }
      `}</style>
    </button>
  );
};

export default BullseyeButton;
