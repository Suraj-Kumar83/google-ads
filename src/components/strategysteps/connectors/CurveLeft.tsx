type ConnectorProps = {
  className?: string;
};

const CurveLeft = ({ className }: ConnectorProps) => (
  <svg
    width="551"
    height="201"
    viewBox="0 0 551 201"
    fill="none"
    className={`absolute opacity-25 ${className ?? ""}`}
  >
    <path
      d="M550.5 200.504L24.4999 200.504C11.2451 200.504 0.499883 189.758 0.4999 176.504L0.500092 24.5C0.500108 11.2452 11.2453 0.499987 24.5001 0.5L110.499 0.500087"
      stroke="#4D9EFF"
    />
  </svg>
);

export default CurveLeft;
