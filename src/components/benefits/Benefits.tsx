import BenefitItem from "./BenefitsItems";

const benefits = [
  { icon: "/assets/icon/benefits1.svg", text: "Uncover Hidden Opportunities" },
  { icon: "/assets/icon/benefits2.svg", text: "Reduce Wasted Ad Spend" },
  { icon: "/assets/icon/benefits3.svg", text: "Optimize Budget Allocation" },
  { icon: "/assets/icon/benefits4.svg", text: "Enhance Ad Targeting" },
  { icon: "/assets/icon/benefits5.svg", text: "Increase Conversion Rates" },
  { icon: "/assets/icon/benefits6.svg", text: "Gain Competitive Insights" },
  { icon: "/assets/icon/benefits7.svg", text: "Streamline Campaign Management" },
];

const BenefitsSection = () => {
  return (
    <section className="w-full flex justify-center">
      <div
        className="
          w-full max-w-[1440px]
          px-[80px] py-[100px]
          flex gap-[80px]
          items-start
        "
      >
 {/* LEFT TITLE COLUMN */}
<div className="w-[320px] shrink-0">
  <h3
    className="
      text-white
      font-[Geist]
      text-[45px]
      font-medium
      leading-[1.2]
      tracking-[-0.9px]
    "
  >
    <span className="text-[#4D9EFF]">Benefits</span> of <br />
    Expert Google <br /> Ads Management
  </h3>
</div>


        {/* RIGHT GRID */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[40px] gap-x-[48px]">
          {benefits.map((item, index) => (
            <BenefitItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
