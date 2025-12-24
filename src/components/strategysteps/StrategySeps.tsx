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
    <div className="pt-[20px] lg:pt-[6px] pb-[120px] text-center">
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

      <p
  className="
    mt-4
    text-center
    text-[#A2A2A2]
    font-[Geist]
    text-[23px]
    font-normal
    leading-[1.47]
  "
>
  Transform your Google Ads spend into significant profit
</p>

    </div>

    {/* ================= STEPS (UNCHANGED FLOW) ================= */}
    <div className="relative mt-[-20px] flex flex-col gap-[120px]">

      {/* STEP 01 */}
      <div className="relative flex items-center justify-center pl-32">
        <Chip text="Here's How We Do It" />

        <div className="ml-0">
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
      <CurveRight className="top-[60px] left-[660px]" />

      {/* STEP 02 */}
      <div className="ml-[360px] mt-[-70px]">
        <StepCard
          number="02"
          title="Detailed Review"
          description="Conduct a thorough audit of your current ads to identify what's working and what's not."
          align="left"
        />
      </div>

      {/* CONNECTOR 02 → 03 */}
      <CurveLeft className="top-[260px] left-[250px]" />

      {/* STEP 03 */}
      <div className="mt-[-40px] mr-[200px] flex justify-end">
        <StepCard
          number="03"
          title="Plan and Fix"
          description="Tailor a customized plan focused on reducing costs and boosting sales through targeted strategies."
          align="right"
        />
      </div>

      {/* CONNECTOR 03 → 04 */}
      <CurveRightReverse className="top-[470px] left-[660px]" />

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
