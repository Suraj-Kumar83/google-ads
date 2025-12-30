import ContactForm from "./ContactForm";
import logo from "/assets/BluvodigitalLogo.png";

const FooterSection = () => {
  return (
    <footer className="w-full flex justify-center">
      <div
        className="
          w-full max-w-[1440px]
          px-4 sm:px-6 lg:px-[80px]
          py-8 sm:py-12 lg:py-[80px]
          flex flex-col
        "
      >
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-[80px]">
          <div className="flex-1">
            {/* HEADING */}
            <h2
              className="
                w-full lg:w-[385px]
                text-[#EDF5FF]
                font-[Geist]
                text-[32px] sm:text-[48px] lg:text-[64px]
                font-medium
                leading-[1.2]
                tracking-[-1.92px]
              "
            >
              Let's Drive <br />
              Your <span className="text-brandBlue">Growth Together</span>
            </h2>

            {/* PARAGRAPH */}
            <p
              className="
                mt-4 sm:mt-6
                max-w-[420px]
                text-[#CFCFCF]
                font-[Geist]
                text-[14px] sm:text-[15px] lg:text-[16px]
                font-normal
                leading-[1.5]
              "
            >
              If you have any questions or need any assistance during business
              hours please get in touch.
            </p>

            {/* CONTACT GRID */}
     <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#A2A2A2] text-sm">

 {/* CONTACT INFO */}
<div className="mt-6 sm:mt-8 flex flex-col gap-6 text-[#A2A2A2] text-sm">

  {/* ROW 1: CALL + LOCATION (ALWAYS SAME ROW) */}
  <div className="flex gap-8">
    {/* Call */}
    <div>
      <p className="text-white font-medium">Call on</p>
      <p className="whitespace-nowrap">+91 98765 43210</p>
      <p className="whitespace-nowrap">+91 98000 56780</p>
    </div>

    {/* Location */}
    <div>
      <p className="text-white font-medium">Location</p>
      <p className="whitespace-nowrap">USA, New York - 1060</p>
      <p className="whitespace-nowrap">St. First Avenue 1</p>
    </div>
  </div>

  {/* ROW 2: EMAIL + SOCIAL */}
  <div className="flex gap-8">
    {/* Email */}
    <div>
      <p className="text-white font-medium">Email</p>
      <p className="whitespace-nowrap">username@example.com</p>
      <p className="whitespace-nowrap">username@gmail.com</p>
    </div>

    {/* Social */}
    <div>
      <p className="text-white font-medium">Social Network</p>
      <div className="flex gap-4 mt-2 items-center">
        <img src="/assets/icon/Facebook.svg" className="w-[20px] h-[20px]" />
        <img src="/assets/icon/Twitter.svg" className="w-[20px] h-[20px]" />
        <img src="/assets/icon/LinkedIn.svg" className="w-[20px] h-[20px]" />
      </div>
    </div>
  </div>

</div>


</div>


          </div>

          {/* RIGHT FORM */}
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>

        {/* SPACER */}
        <div className="h-8 sm:h-12 lg:h-[64px]" />

       <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-[80px] pt-8 sm:pt-12 lg:pt-[64px] border-t border-white/10">
  <div className="flex-1">
    <img src={logo} alt="Bluvo Digital" className="w-[90px] sm:w-[100px] lg:w-[109px]" />

    <p
      className="
        mt-4
        font-[Geist]
        text-[24px] sm:text-[32px] lg:text-[45px]
        font-medium
        leading-[1.2]
        tracking-[-0.9px]
      "
    >
      <span className="text-[#4D9EFF]">Let's collaborate</span>{" "}
      <span className="text-[#CFCFCF]">
        to create<br className="hidden sm:block" /> something truly remarkable.
      </span>
    </p>
  </div>

  {/* QUICK LINKS + SERVICES — SAME ROW ON MOBILE */}
  {/* QUICK LINKS + SERVICES */}
<div className="flex flex-row gap-12 sm:gap-10 lg:gap-[80px]">
  <div>
    <p className="text-white font-medium mb-4">Quick Links</p>
    <ul className="space-y-2 text-[#A2A2A2] text-sm">
      <li>Services</li>
      <li>About</li>
      <li>Case Studies</li>
      <li>Resources</li>
      <li>Blog</li>
    </ul>
  </div>

  <div>
    <p className="text-white font-medium mb-4">Services</p>
    <ul className="space-y-2 text-[#A2A2A2] text-sm">
      <li>Branding</li>
      <li>Designing</li>
      <li>Development</li>
      <li>Marketing</li>
      <li>SEO</li>
      <li>UI/UX Designing</li>
    </ul>
  </div>
</div>

</div>

      </div>
    </footer>
  );
};

export default FooterSection;
