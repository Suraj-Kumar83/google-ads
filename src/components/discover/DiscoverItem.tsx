interface DiscoverItemProps {
  icon: string;
  title: string;
  description: string;
}

const DiscoverItem = ({
  icon,
  title,
  description,
}: DiscoverItemProps) => {
  return (
    <div
      className="
        flex flex-col items-center
        w-full lg:w-[400px]
        p-[16px] sm:p-[20px] lg:p-[24px]
        gap-[16px] sm:gap-[20px] lg:gap-[28px]
        rounded-[16px]
        bg-white/[0.02]
      "
    >
      {/* Icon */}
      <img
        src={icon}
        alt=""
        className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[56px] lg:h-[56px]"
      />

      {/* Title */}
      <h4
        className="
          text-center
          text-[#EDF5FF]
          font-[Geist]
          text-[18px] sm:text-[22px] lg:text-[28px]
          font-medium
          leading-[1.2]
          tracking-[-0.56px]
        "
      >
        {title}
      </h4>

      {/* Description */}
      <p
        className="
          text-center
          text-[#A2A2A2]
          font-[Geist]
          text-[14px] sm:text-[15px] lg:text-[16px]
          font-normal
          leading-[1.5]
        "
      >
        {description}
      </p>
    </div>
  );
};


export default DiscoverItem;
