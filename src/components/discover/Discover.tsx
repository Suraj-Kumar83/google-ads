import DiscoverItem from "./DiscoverItem";

const discoverItems = [
  {
    icon: "/assets/icon/verified.svg",
    title: "Deep Expertise & Proven Success",
    description:
      "Harness my extensive expertise for campaigns that hit the mark every time.",
  },
  {
    icon: "/assets/icon/tactic.svg",
    title: "Tailored Marketing Strategies",
    description:
      "Your business goals are uniquely met with tailored marketing plans.",
  },
  {
    icon: "/assets/icon/search_insights.svg",
    title: "Transparent & Insightful Reporting",
    description:
      "Clear, insightful reporting that guides decision-making.",
  },
  {
    icon: "/assets/icon/handyman.svg",
    title: "Cutting-Edge Tools & Techniques",
    description:
      "State-of-the-art tech ensuring cutting-edge campaigns.",
  },
  {
    icon: "/assets/icon/photo_auto_merge.svg",
    title: "Ethical Marketing Commitment",
    description:
      "Trust and integrity are at the forefront of every campaign.",
  },
  {
    icon: "/assets/icon/support_agent.svg",
    title: "Committed Personal Support",
    description:
      "Direct support, ensuring your needs are met promptly.",
  },
];

const DiscoverSection = () => {
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
        <div className="text-center max-w-[720px]">
          <h2 className="text-[#EDF5FF] text-[48px] font-medium leading-[120%]">
            Discover the{" "}
            <span className="text-brandBlue">advantage</span> of
            <br />
            personalized marketing mastery
          </h2>

          <p className="mt-4 text-[#A2A2A2] text-[16px] leading-[150%]">
            Crafting your success with precision and passion
          </p>
        </div>

        {/* GRID */}
        <div className="mt-[48px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-[72px] gap-x-[48px]">
          {discoverItems.map((item, index) => (
            <DiscoverItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
