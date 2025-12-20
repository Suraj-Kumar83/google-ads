import Chip from "./Chips";
import StepCard from "./StepsCard";
import ChipLine from "./connectors/ChipLine";
import CurveRight from "./connectors/CurveRight";
import CurveLeft from "./connectors/CurveLeft";
import CurveRightReverse from "./connectors/CurveRightReverse";

const StrategyStepsSection = () => {
  return (
    <section className="w-full flex justify-center">
  <div className="relative w-full max-w-[1440px] lg:px-[40px]">

    {/* ================= HEADING (ISOLATED) ================= */}
    <div className="pt-[80px] lg:pt-[160px] pb-[120px] text-center">
      <h2
        className="
          text-[#EDF5FF]
          text-[64px]
          font-medium
          leading-[1.2]
          tracking-[-1.92px]
        "
      >
        Strategic Steps to Google{" "}
        <span className="text-brandBlue">Ads Success</span>
      </h2>

      <p className="mt-4 text-[#A2A2A2] text-[16px] leading-[150%]">
        Transform your Google Ads spend into significant profit
      </p>
    </div>

    {/* ================= STEPS (UNCHANGED FLOW) ================= */}
    <div className="relative py-[120px] flex flex-col gap-[140px]">

      {/* STEP 01 */}
      <div className="relative flex items-center justify-center pl-32">
        <Chip text="Here's How We Do It" />

        <div className="-ml-0">
          <ChipLine />
        </div>

        <div className="-ml-20">
          <StepCard
            number="01"
            title="Assess Business & Challenges"
            description="Start by gaining a deep understanding of your business goals and current challenges."
            align="right"
          />
        </div>
      </div>

      {/* CONNECTOR 01 → 02 */}
      <CurveRight className="top-[210px] left-[660px]" />

      {/* STEP 02 */}
      <div className="ml-[280px] mt-[-70px]">
        <StepCard
          number="02"
          title="Detailed Review"
          description="Conduct a thorough audit of your current ads to identify what's working and what's not."
          align="left"
        />
      </div>

      {/* CONNECTOR 02 → 03 */}
      <CurveLeft className="top-[410px] left-[230px]" />

      {/* STEP 03 */}
      <div className="mt-[-60px] mr-[180px] flex justify-end">
        <StepCard
          number="03"
          title="Plan and Fix"
          description="Tailor a customized plan focused on reducing costs and boosting sales through targeted strategies."
          align="right"
        />
      </div>

      {/* CONNECTOR 03 → 04 */}
      <CurveRightReverse className="top-[620px] left-[660px]" />

      {/* STEP 04 */}
      <div className="mt-[-60px] ml-[300px]">
        <StepCard
          number="04"
          title="Keep Improving"
          description="Continuously optimize your ads based on real-time data to ensure ongoing improvement."
          align="left"
        />
      </div>

    </div>
  </div>
</section>

  );
};

export default StrategyStepsSection;
