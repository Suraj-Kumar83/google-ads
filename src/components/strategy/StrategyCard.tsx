type StrategyCardProps = {
  icon: string;
  title: string;
  description: string;
};

const StrategyCard = ({ icon, title, description }: StrategyCardProps) => {
  return (
    <div
      className="
        flex flex-col items-start
        w-[400px]
        p-[24px]
        gap-[24px]
        rounded-[16px]
        bg-[rgba(255,255,255,0.02)]
      "
    >
      {/* ICON */}
      <div
        className="
          w-[35px] h-[35px]
          flex items-center justify-center
          rounded-lg
          
        "
      >
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
          self-stretch
          text-[#EDF5FF]
          text-[28px]
          font-medium
          leading-[1.2]
          tracking-[-0.56px]
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          text-[#A2A2A2]
          text-[12px]
          font-normal
          leading-[1.57]
        "
      >
        {description}
      </p>
    </div>
  );
};

export default StrategyCard;
