interface DiscoverItemProps {
  icon: string;
  title: string;
  description: string;
}

const DiscoverItem = ({ icon, title, description }: DiscoverItemProps) => {
  return (
    <div className="flex flex-col items-start gap-[28px]">
      {/* Icon */}
      <img src={icon} alt="" className="w-7 h-7 opacity-90" />

      {/* Title */}
      <h4 className="text-[#EDF5FF] text-[18px] font-medium leading-[130%]">
        {title}
      </h4>

      {/* Description */}
      <p className="text-[#A2A2A2] text-[14px] leading-[157%]">
        {description}
      </p>
    </div>
  );
};

export default DiscoverItem;
