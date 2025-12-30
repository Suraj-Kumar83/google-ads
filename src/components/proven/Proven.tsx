import CaseStudyCard from "./CaseStudy";

const caseStudies = [
  {
    image: "/assets/img2.png",
    title: "Hari Om Yoga Vidya School",
    description: "Website Design, Paid Marketing, SEO",
  },
  {
    image: "/assets/img4.png",
    title: "Comfytails",
    description: "Ad Creatives, Social Media Creatives, Web Design",
  },
  {
    image: "/assets/img1.png",
    title: "Triumph Hub",
    description: "Website Design, Paid Marketing",
  },
];
const ProvenImpactSection = () => {
  return (
    <section className="w-full flex justify-center">
      <div
        className="
          w-full max-w-[1440px]
          px-4 sm:px-6 lg:px-[80px]
          py-8 sm:py-12 lg:py-[0px]
          flex flex-col
        "
      >
        {/* HEADING */}
        <div className="max-w-[720px]">
          <h2
            className="
              text-white
              font-[Geist]
              text-[32px] sm:text-[48px] lg:text-[64px]
              font-medium
              leading-[1.2]
              tracking-[-1.92px]
            "
          >
            <span className="text-[#4D9EFF]">Proven</span> Impact
          </h2>

          <p
            className="
              mt-4
              text-[#CFCFCF]
              font-[Geist]
              text-[14px] sm:text-[15px] lg:text-[16px]
              font-normal
              leading-[1.5]
            "
          >
            Discover how our targeted strategies have driven success for
            businesses like yours. Each case study below showcases our
            commitment to delivering measurable results and transformative
            growth.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-8 sm:mt-12 lg:mt-[48px]
            flex flex-col
            sm:grid sm:grid-cols-2 sm:gap-6
            lg:flex lg:flex-row lg:gap-[40px]
          "
        >
          {caseStudies.map((item, index) => (
            <CaseStudyCard
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenImpactSection;
