interface BenefitItemProps {
  icon: string;
  text: string;
}

const BenefitItem = ({ icon, text }: BenefitItemProps) => {
  return (
    <div className="flex flex-col items-start gap-4 sm:gap-6">
      <img
        src={icon}
        alt=""
        aria-hidden
        className="
          w-[48px] h-[48px]
          sm:w-[56px] sm:h-[56px]
          lg:w-[65px] lg:h-[65px]
          opacity-90
        "
      />

      <p
        className="
          text-[#EDF5FF]
          text-sm sm:text-[15px] lg:text-[16px]
          font-medium
          leading-[1.5]
        "
      >
        {text}
      </p>
    </div>
  );
};

export default BenefitItem;
