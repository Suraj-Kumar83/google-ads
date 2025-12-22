import HeroForm from "./HeroForm";
import LogoMarquee from "../logomarquee/Logomarquee";

const Hero = () => {
  return (
    <section className="relative z-10 flex flex-col items-center ]">

      {/* HERO + FORM */}
      <div className="w-full max-w-[1440px]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-[620px]">
            <h1 className="font-[500] leading-[1.15] tracking-[-1.5px]">
              <span className="block text-brandBlue text-[48px] lg:text-[56px]">
                Maximize Your ROI
              </span>
              <span className="block text-white text-[42px] lg:text-[52px] font-medium">
                with #1 Google Ads
              </span>
              <span className="block text-white text-[42px] lg:text-[52px] font-medium">
                Agency
              </span>
            </h1>

            <p className="mt-6 text-gray-300">
              Officially certified as a{" "}
              <span className="font-medium text-white">
                Google Partner
              </span>
            </p>

            <div className="mt-4">
              <img
                src="/assets/GooglePartner.png"
                alt="Google Partner"
                className="w-[152px] h-[59px] object-cover"
              />
            </div>

            <div className="flex gap-10 mt-10 text-sm">
              <Stat title="6+ Years" subtitle="of Experience" />
              <Divider />
              <Stat title="$10M+" subtitle="in Ad Spend Managed" />
              <Divider />
              <Stat title="100+" subtitle="Ads Accounts" />
            </div>
          </div>

          {/* RIGHT FORM */}
          <HeroForm />
        </div>
      </div>

      {/* 🔽 LOGO MARQUEE (BOTTOM) */}
      <div className="w-full flex justify-center">
        <div
          className="
            flex items-center
            w-full max-w-[1440px]
            p-20
            gap-[42px]
          "
        >
          <LogoMarquee />
        </div>
      </div>

    </section>
  );
};

const Stat = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div>
    <p className="text-lg font-medium text-white leading-none">
      {title}
    </p>
    <p className="stat-label mt-1">
      {subtitle}
    </p>
  </div>
);

const Divider = () => (
  <div className="w-px h-8 bg-white/20 self-center" />
);

export default Hero;
