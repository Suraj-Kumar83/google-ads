import HeroForm from "./HeroForm";
import LogoMarquee from "../logomarquee/Logomarquee";

const Hero = () => {
  return (
    <section className="relative z-10">
      {/* HERO + FORM */}
      <div className="w-full max-w-[1440px] mx-auto">
        <div
          className="
            max-w-7xl mx-auto
            px-4 sm:px-6
            py-12 sm:py-16 lg:py-20
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12 lg:gap-20
            items-center
          "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[620px]">
            <h1 className="leading-[1.15] tracking-[-1px]">
              <span className="block text-brandBlue text-[32px] sm:text-[40px] lg:text-[56px]">
                Maximize Your ROI
              </span>
              <span className="block text-white text-[28px] sm:text-[36px] lg:text-[52px] font-medium">
                with #1 Google Ads
              </span>
              <span className="block text-white text-[28px] sm:text-[36px] lg:text-[52px] font-medium">
                Agency
              </span>
            </h1>

            <p className="mt-6 sm:mt-10 text-gray-300 text-sm sm:text-base">
              Officially certified as a{" "}
              <span className="font-medium text-white">
                Google Partner
              </span>
            </p>

            <div className="mt-4 sm:mt-6">
              <img
                src="/assets/GooglePartner.png"
                alt="Google Partner"
                className="w-[120px] sm:w-[152px] h-auto object-contain"
              />
            </div>

         {/* STATS */}
<div
  className="
    mt-8 sm:mt-10
    grid grid-cols-2
    gap-6
    sm:grid-cols-3 sm:gap-6
  "
>
  <Stat title="6+ Years" subtitle="of Experience" />
  <Stat title="$10M+" subtitle="in Ad Spend Managed" />

  {/* Third stat centered on mobile */}
  <div className="col-span-2 sm:col-span-1">
    <Stat title="100+" subtitle="Ads Accounts" />
  </div>
</div>

          </div>

          {/* RIGHT FORM */}
          <div className="flex justify-center lg:justify-end">
            <HeroForm />
          </div>
        </div>
      </div>

      {/* LOGO MARQUEE */}
      <div className="w-full flex justify-center mt-8 sm:mt-12">
        <div className="w-full max-w-[1440px] px-4 sm:px-6">
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
};

const Stat = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="flex flex-col sm:items-start">
    {/* Desktop: single line | Mobile: stacked */}
    <p className="text-white font-medium text-lg leading-tight sm:leading-none">
      <span className="block sm:inline">{title}</span>{" "}
      <span className="block sm:inline text-[#CFCFCF] font-normal">
        {subtitle}
      </span>
    </p>
  </div>
);


export default Hero;
