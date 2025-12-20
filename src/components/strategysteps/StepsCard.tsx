type StepCardProps = {
  number: string;
  title: string;
  description: string;
  align: "left" | "right";
};

const StepCard = ({ number, title, description, align }: StepCardProps) => {
  return (
    <div className={`w-full flex ${align === "right" ? "justify-end" : "justify-start"}`}>
      <div
  className="
    relative z-10
    w-[520px]
    p-[24px]
    rounded-[16px]
    bg-white/5
    backdrop-blur
    shadow-lg
    flex gap-[24px]
  "
>

        <span className="text-[64px] font-semibold text-white/10 leading-none">
          {number}
        </span>

        <div className="flex flex-col gap-2">
          <h3 className="text-[#EDF5FF] text-[24px] font-medium">
            {title}
          </h3>
          <p className="text-[#A2A2A2] text-[14px] leading-[1.6]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
