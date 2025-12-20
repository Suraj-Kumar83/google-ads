interface IncludedCardProps {
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

const IncludedCard = ({
  icon,
  title,
  description,
  badge,
}: IncludedCardProps) => {
  return (
    <div
      className="
        relative
        flex flex-col
        gap-[24px]
        p-[24px]
        rounded-[16px]
        bg-white/[0.02]
      "
    >
      {/* Badge (Top Right) */}
      {badge && (
        <span
          className="
            absolute top-4 right-4
            text-[12px]
            text-[#EDF5FF]
            px-3 py-1
            rounded-full
            bg-[#4D9EFF]/10
            border border-[#4D9EFF]/30
          "
        >
          {badge}
        </span>
      )}

      {/* Icon */}
      <img src={icon} alt="" className="w-8 h-8" />

      {/* Title */}
      <h4 className="text-[#EDF5FF] text-[18px] font-medium leading-[140%]">
        {title}
      </h4>

      {/* Description */}
      <p className="text-[#A2A2A2] text-[14px] leading-[157%]">
        {description}
      </p>
    </div>
  );
};

export default IncludedCard;
