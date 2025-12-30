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
          w-full max-w-[520px]
          p-4 sm:p-6
          rounded-2xl
          bg-white/5
          backdrop-blur
          flex gap-4 sm:gap-6
        "
      >
        <span className="text-[40px] sm:text-[56px] lg:text-[64px] font-medium text-white/10 leading-none">
          {number}
        </span>

        <div className="flex flex-col gap-2">
          <h3 className="text-[#EDF5FF] text-lg sm:text-xl lg:text-[24px] font-medium">
            {title}
          </h3>
          <p className="text-[#A2A2A2] text-sm leading-[1.6]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
