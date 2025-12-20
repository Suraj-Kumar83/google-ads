type ConnectorProps = {
  className?: string;
};

const CurveRight = ({ className }: ConnectorProps) => (
  <svg
    width="551"
    height="201"
    viewBox="0 0 551 201"
    fill="none"
    className={`absolute opacity-25 ${className ?? ""}`}
  >
    <path
      d="M440 0.500297L526 0.500302C539.255 0.500302 550.001 11.2455 550.001 24.5003L550 176.504C550 189.759 539.255 200.504 526 200.504L0 200.504"
      stroke="#4D9EFF"
    />
  </svg>
);

export default CurveRight;
