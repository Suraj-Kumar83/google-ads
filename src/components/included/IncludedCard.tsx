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
      <img src={icon} alt="" className="w-[56px] h-[56px]" />

      {/* Title — Old/H5 */}
      <h4
        className="
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

      {/* Description */}
      <p
        className="
          text-[#CFCFCF]
          font-[Geist]
          text-[11px]
          font-normal
          leading-[1.57]
        "
      >
        {description}
      </p>
    </div>
  );
};

export default IncludedCard;
