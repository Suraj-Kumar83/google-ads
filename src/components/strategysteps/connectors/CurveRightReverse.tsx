type ConnectorProps = {
  className?: string;
};

const CurveRightReverse = ({ className }: ConnectorProps) => (
  <svg
    width="551"
    height="201"
    viewBox="0 0 551 201"
    fill="none"
    className={`absolute opacity-25 ${className ?? ""}`}
  >
    <path
      d="M0 200.504L526 200.504C539.255 200.504 550.001 189.758 550.001 176.504L550 24.5C550 11.2452 539.255 0.499981 526 0.499981L440 0.499981"
      stroke="#4D9EFF"
    />
  </svg>
);

export default CurveRightReverse;
