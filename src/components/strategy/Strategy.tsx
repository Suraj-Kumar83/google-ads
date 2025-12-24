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
          flex flex-col items-start
          min-h-[844px]
          pt-10 px-6 pb-16
          gap-12
          lg:pt-[70px] lg:px-[80px] lg:pb-[80px]
          lg:gap-[65px]
        "
      >
        {/* HEADER ROW */}
        <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <h2
            className="
              text-3xl lg:text-5xl
              font-medium
              leading-[1.15]
              tracking-[-1px]
              max-w-[720px]
            "
          >
            You Just Need a{" "}
            <span className="text-brandBlue">Fresh Look</span> at
            <br />
            Your Strategy
          </h2>
<Link to="/contact" className="inline-block">
  {/* Gradient Border Wrapper */}
  <span
    className="
      inline-flex
      rounded-[50px]
      p-[1.5px]
      bg-gradient-to-r
      from-[#CAC531]
      to-[#9747FF]
    "
  >
    {/* Actual Button */}
    <span
      className="
        inline-flex items-center gap-[12px]
        px-[40px] py-[24px]
        rounded-[50px]
        bg-[#131313BF]
        text-[#EDF5FF]
        text-[16px]
        font-medium
        leading-[1.2]
        transition
        bg-[#131313]

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
            w-full
            flex flex-wrap
            h-auto lg:h-[564px]
            items-start
            content-start
            gap-[40px]
            shrink-0
            self-stretch
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
