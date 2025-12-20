const ConnectorPath = () => {
  return (
    <svg
      className="absolute top-[320px] left-1/2 -translate-x-1/2 -z-10 opacity-25"
      width="1200"
      height="900"
      viewBox="0 0 1200 900"
      fill="none"
    >
      <path
        d="
          M150 50
          H1050
          V200
          H150
          V350
          H1050
          V500
          H150
          V650
          H1050
        "
        stroke="url(#gradient)"
        strokeWidth="1"
        fill="none"
      />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4D9EFF" stopOpacity="0" />
          <stop offset="40%" stopColor="#4D9EFF" />
          <stop offset="100%" stopColor="#4D9EFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ConnectorPath;
