interface CaseStudyCardProps {
  image: string;
  title: string;
  description: string;
}

const CaseStudyCard = ({
  image,
  title,
  description,
}: CaseStudyCardProps) => {
  return (
    <div
      className="
        group
        flex flex-col items-start
        w-full sm:w-auto lg:w-[460px]
        h-auto lg:h-[393px]
        gap-6 sm:gap-8 lg:gap-[40px]
        cursor-pointer
      "
    >
    <div
  className="
    w-full
    h-[220px] sm:h-[260px]
    lg:h-full
    overflow-hidden
    rounded-[16px]
    transition-all duration-300 ease-out
  "
>
  <img
    src={image}
    alt={title}
    className="
      w-full h-full object-cover
      transition-transform duration-500 ease-out
      group-hover:scale-110
      mt-3
    "
  />
</div>


      {/* TEXT */}
      <div className="flex flex-col gap-[6px] w-full">
        <div className="flex items-center justify-between w-full">
          <p
            className="
              flex-1
              text-[rgba(237,245,255,0.70)]
              font-[Geist]
              text-[18px] sm:text-[20px] lg:text-[23px]
              font-normal
              leading-[1.47]
              whitespace-normal lg:whitespace-nowrap
              overflow-hidden
              text-ellipsis
              transition-colors duration-300
              group-hover:text-[#EDF5FF]
            
            "
          >
            {title}
          </p>

          <span
            className="
              flex
              w-[24px] h-[24px]
              p-[4px]
              justify-center items-center
              text-[#A2A2A2]
              text-[16px]
              shrink-0
              transition-all duration-200
              group-hover:rounded-[50px]
              group-hover:border
              group-hover:border-[#CFCFCF]
            "
          >
            ↗
          </span>
        </div>

        <p
          className="
            text-[rgba(207,207,207,0.60)]
            font-[Geist]
            text-[12px]
            font-normal
            leading-[1.47]
            capitalize
            transition-colors duration-300
            group-hover:text-[rgba(207,207,207,0.70)]
            mt-1
          "
          style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
