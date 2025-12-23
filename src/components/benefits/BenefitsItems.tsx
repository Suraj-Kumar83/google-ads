interface BenefitItemProps {
  icon: string;
  text: string;
}

const BenefitItem = ({ icon, text }: BenefitItemProps) => {
  return (
    <div className="flex flex-col items-start gap-[28px]">
      <img
        src={icon}
        alt=""
        aria-hidden
        className="w-[72px] h-[72px] opacity-90"
      />

      <p
        className="
          text-[#EDF5FF]
          font-[Geist]
          text-[16px]
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
