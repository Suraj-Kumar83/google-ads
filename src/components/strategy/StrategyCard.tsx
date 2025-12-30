type StrategyCardProps = {
  icon: string;
  title: string;
  description: string;
};

const StrategyCard = ({ icon, title, description }: StrategyCardProps) => {
  return (
    <div
      className="
        flex flex-col
        w-full
        p-5 sm:p-6
        gap-4 sm:gap-6
        rounded-2xl
        bg-[rgba(255,255,255,0.02)]
      "
    >
      {/* ICON */}
      <div className="w-8 h-8 flex items-center justify-center">
        <img
          src={icon}
          alt=""
          className="w-5 h-5 opacity-90"
          aria-hidden="true"
        />
      </div>

      {/* TITLE */}
      <h3
        className="
          text-[#EDF5FF]
          text-[20px] sm:text-[24px] lg:text-[28px]
          font-medium
          leading-[1.2]
          tracking-[-0.5px]
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          text-[#A2A2A2]
          text-sm sm:text-[13px]
          leading-[1.6]
        "
      >
        {description}
      </p>
    </div>
  );
};

export default StrategyCard;
