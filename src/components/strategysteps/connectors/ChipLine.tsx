type ConnectorProps = {
  className?: string;
};

const ChipLine = ({ className }: ConnectorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="253"
    height="1"
    viewBox="0 0 253 1"
    fill="none"
    className={`opacity-25 ${className ?? ""}`}
  >
    <path
      d="M0 0.5L253 0.5"
      stroke="url(#chipGradient)"
      strokeWidth="1"
    />
    <defs>
      <linearGradient
        id="chipGradient"
        x1="0"
        y1="0"
        x2="253"
        y2="0"
        gradientUnits="userSpaceOnUse"
      >
        {/* Solid near chip */}
        <stop offset="0%" stopColor="#4D9EFF" />

        {/* Fade toward card */}
        <stop offset="62.5%" stopColor="#4D9EFF" />
        <stop offset="100%" stopColor="#4D9EFF" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default ChipLine;
