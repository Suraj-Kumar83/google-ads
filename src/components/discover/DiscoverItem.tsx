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
        w-[400px]
        p-[24px]
        gap-[28px]
        rounded-[16px]
        bg-white/[0.02]
      "
    >
      {/* Icon */}
      <img src={icon} alt="" className="w-[56px] h-[56px]" />

      {/* Title — Old/H5 */}
      <h4
        className="
          text-center
          text-[#EDF5FF]
          font-[Geist]
          text-[28px]
          font-medium
          leading-[1.2]
          tracking-[-0.56px]
        "
      >
        {title}
      </h4>

      {/* Description — Old/P2 */}
      <p
        className="
          text-center
          text-[#A2A2A2]
          font-[Geist]
          text-[16px]
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
