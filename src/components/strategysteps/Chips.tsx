interface ChipProps {
  text: string;
}

const Chip = ({ text }: ChipProps) => {
  return (
    <div
      className="
        inline-flex
        p-[2px]
        rounded-full
        min-w-[180px]
        justify-center
        shadow-[0_4px_70px_rgba(77,158,255,0.10)]
      "
      style={{
        background:
          "linear-gradient(90deg, #CAC531 0%, rgba(77,158,255,0.25) 100%)",
      }}
    >
      <div
        className="
          inline-flex items-center justify-center
          px-[24px] py-[16px]
          rounded-full
          bg-[#131313BF]
          text-[#EDF5FF]
          text-[14px]
          font-medium
          leading-[120%]
          whitespace-nowrap
        "
      >
        {text}
      </div>
    </div>
  );
};

export default Chip;
