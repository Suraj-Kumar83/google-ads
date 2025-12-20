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
        className="w-6 h-6 opacity-90"
      />

      <p className="text-[#EDF5FF] text-[16px] leading-[150%]">
        {text}
      </p>
    </div>
  );
};

export default BenefitItem;
