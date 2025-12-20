import CaseStudyCard from "./CaseStudy";

const caseStudies = [
  {
    image: "/assets/img2.png",
    title: "Hari Om Yoga Vidya School",
  },
  {
    image: "/assets/img4.png",
    title: "Comfytails",
  },
  {
    image: "/assets/img1.png",
    title: "Triumph Hub",
  },
];

const ProvenImpactSection = () => {
  return (
    <section className="w-full flex justify-center">
      <div
        className="
          w-full max-w-[1440px]
          px-[80px] py-[80px]
          flex flex-col
        "
      >
        {/* HEADING */}
        <div className="max-w-[720px]">
          <h2 className="text-[#EDF5FF] text-[48px] font-medium leading-[120%]">
            <span className="text-brandBlue">Proven</span> Impact
          </h2>

          <p className="mt-4 text-[#A2A2A2] text-[16px] leading-[150%]">
            Discover how our targeted strategies have driven success for
            businesses like yours. Each case study below showcases our
            commitment to delivering measurable results and transformative
            growth.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-[48px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[48px]">
          {caseStudies.map((item, index) => (
            <CaseStudyCard
              key={index}
              image={item.image}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenImpactSection;
