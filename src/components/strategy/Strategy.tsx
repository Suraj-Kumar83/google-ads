import { Link } from "react-router-dom";
import StrategyCard from "./StrategyCard";

const strategies = [
  {
    icon: "/assets/icon/Vector.svg",
    title: "Optimized Cost-Efficiency",
    description:
      "We analyze your ad spend to pinpoint wasteful expenditures and recommend adjustments for better CPA.",
  },
  {
    icon: "/assets/icon/Icon3.svg",
    title: "Enhanced Conversion Rates",
    description:
      "Enhancing targeting and bidding strategies to improve conversion rates and lower CPA.",
  },
  {
    icon: "/assets/icon/Icon.svg",
    title: "Improved Return on Ad Spend (ROAS)",
    description:
      "Refining ad copy and creative elements to increase click-through rates and engagement.",
  },
  {
    icon: "/assets/icon/Icon4.svg",
    title: "Keyword & Ad Copy Optimization",
    description:
      "Providing deep insights into campaign performance, including keyword effectiveness and competitor analysis.",
  },
  {
    icon: "/assets/icon/Icon5.svg",
    title: "Streamlined Campaign Management",
    description:
      "Offering actionable recommendations that streamline campaign management, saving time and resources.",
  },
];

const StrategySection = () => {
  return (
    <section className="w-full flex justify-center">
      <div
        className="
          w-full max-w-[1440px]
          px-4 sm:px-6 lg:px-[80px]
          py-12 sm:py-16 lg:py-[80px]
          flex flex-col gap-10 lg:gap-[65px]
        "
      >
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <h2
            className="
              text-[28px] sm:text-[36px] lg:text-[48px]
              font-medium
              leading-[1.15]
              tracking-[-1px]
              max-w-[720px]
            "
          >
            You Just Need a{" "}
            <span className="text-brandBlue">Fresh Look</span> at
            <br className="hidden sm:block" />
            Your Strategy
          </h2>

          <Link to="/contact" className="inline-block">
            <span
              className="
                inline-flex
                rounded-full
                p-[1.5px]
                bg-gradient-to-r
                from-[#CAC531]
                to-[#9747FF]
              "
            >
              <span
                className="
                  inline-flex items-center
                  px-6 py-4 sm:px-10 sm:py-6
                  rounded-full
                  bg-[#131313]
                  text-[#EDF5FF]
                  text-sm sm:text-base
                  font-medium
                  leading-[1.2]
                  shadow-[0_0_40px_rgba(202,197,49,0.35),_0_0_80px_rgba(147,51,234,0.35)]
                  transition
                "
              >
                Start Your Campaign
              </span>
            </span>
          </Link>
        </div>

        {/* STRATEGY CARDS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6 lg:gap-10
          "
        >
          {strategies.map((item, index) => (
            <StrategyCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
