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
          px-4 sm:px-6 lg:px-[80px]
          py-6 sm:py-8 lg:py-[0px]
          flex flex-col
          items-center
        "
      >
        {/* HEADING */}
        <div className="text-center">
          <h2
            className="
              text-[#EDF5FF]
              text-[28px] sm:text-[36px] lg:text-[48px]
              font-medium
              leading-[120%]
            "
          >
            What’s <span className="text-brandBlue">Included</span>
          </h2>

          <p
            className="
              mt-4
              mx-auto
              text-center
              text-[#A2A2A2]
              font-[Geist]
              text-[14px] sm:text-[18px] lg:text-[23px]
              font-normal
              leading-[1.47]
              whitespace-normal lg:whitespace-nowrap
            "
          >
            Explore the key components and services included to achieve your goals.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
            mt-8 sm:mt-12 lg:mt-[72px]
            w-full
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6 sm:gap-8 lg:gap-[40px]
          "
        >
          {includedItems.map((item, index) => (
            <IncludedCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default IncludedSection;
