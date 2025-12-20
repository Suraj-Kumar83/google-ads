import IncludedCard from "./IncludedCard";

const includedItems = [
  {
    icon: "/assets/icon/Logos.svg",
    title: "Detailed Google Ads Audit & Strategy",
    description:
      "Review account structure, keyword strategy, ad copy, bidding approach, and provide actionable insights.",
  },
  {
    icon: "/assets/icon/logos1.svg",
    title: "Active Campaign Optimization",
    description:
      "Continuous campaign management with ongoing adjustments and optimizations to improve performance.",
  },
  {
    icon: "/assets/icon/logos2.svg",
    title: "Exclusive Looker Studio Report",
    description:
      "Custom performance dashboard providing clear insights into campaign performance and KPIs.",
    badge: "Free valued at $500",
  },
];

const IncludedSection = () => {
  return (
    <section className="w-full flex justify-center">
      <div
        className="
          w-full max-w-[1440px]
          px-[80px] py-[80px]
          flex flex-col
          items-center
        "
      >
        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-[#EDF5FF] text-[48px] font-medium leading-[120%]">
            What’s <span className="text-brandBlue">Included</span>
          </h2>

          <p className="mt-4 text-[#A2A2A2] text-[16px] leading-[150%] max-w-[520px] mx-auto">
            Explore the key components and services included to achieve your goals.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-[72px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px]">
          {includedItems.map((item, index) => (
            <IncludedCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludedSection;
