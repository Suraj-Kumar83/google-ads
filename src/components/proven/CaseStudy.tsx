interface CaseStudyCardProps {
  image: string;
  title: string;
}

const CaseStudyCard = ({ image, title }: CaseStudyCardProps) => {
  return (
    <div className="flex flex-col gap-[16px]">
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-[16px]">
        <img
          src={image}
          alt={title}
          className="w-full h-[280px] object-cover"
        />
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between">
        <p className="text-[#EDF5FF] text-[14px] font-medium">
          {title}
        </p>

        {/* Arrow icon */}
        <span className="text-[#A2A2A2] text-lg">↗</span>
      </div>
    </div>
  );
};

export default CaseStudyCard;
