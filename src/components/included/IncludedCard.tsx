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
  <div
    className="
      absolute top-4 right-0
      inline-flex items-center
      h-[56px]
      pl-[7px] pr-[12px] py-[8px]
      w-[120px]
      bg-[rgba(77,158,255,0.20)]
      shadow-[0_4px_70px_rgba(77,158,255,0.20)]
    "
  >
    {/* Left notch */}
    <span className="absolute left-[-27px] top-0 h-[80px] w-[22px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="56"
        viewBox="0 0 22 46"
        fill="none"
      >
        <path
          d="M3.19181 42.6261L22 22.7422V46.0005H4.64478C2.88965 46.0005 1.98571 43.9012 3.19181 42.6261Z"
          fill="#4D9EFF"
          fillOpacity="0.2"
        />
        <path
          d="M3.19181 3.37387L22 23.2578V-0.000486374H4.64478C2.88965 -0.000486374 1.98571 2.0988 3.19181 3.37387Z"
          fill="#4D9EFF"
          fillOpacity="0.2"
        />
      </svg>
    </span>

    {/* HARD-CODED, STYLED TEXT */}
    <span className="inline-flex items-baseline gap-[6px] whitespace-nowrap">
      <span
        className="text-[#EDF5FF] font-[Geist] text-[16px] font-normal leading-[120%] tracking-[-0.24px]"
        style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
      >
        Free valued at<br/>
        <p className="   ml-7
    text-[#EDF5FF]
    font-[Geist]
    text-[21px]
    font-semibold
    leading-[120%]
    tracking-[-0.34px]
    line-through" style={{
    fontFeatureSettings: "'liga' off, 'clig' off",
  }}>$500</p>
      </span>
    </span>
  </div>
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
