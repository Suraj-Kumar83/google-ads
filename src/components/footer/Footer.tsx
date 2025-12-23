import ContactForm from "./ContactForm";
import logo from "/assets/BluvodigitalLogo.png";

const FooterSection = () => {
  return (
    <footer className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] px-[80px] py-[80px] flex flex-col">
        <div className="flex flex-col lg:flex-row gap-[80px]">
          <div className="flex-1">
            {/* H2 — Old/H3 */}
            <h2
              className="
                w-[385px]
                text-[#EDF5FF]
                font-[Geist]
                text-[64px]
                font-medium
                leading-[1.2]
                tracking-[-1.92px]
              "
            >
              Let's Drive <br />
              Your <span className="text-brandBlue">Growth Together</span> <br />
             
            </h2>

            {/* Paragraph — Old/P2 */}
            <p
              className="
                mt-6
                max-w-[420px]
                text-[#CFCFCF]
                font-[Geist]
                text-[16px]
                font-normal
                leading-[1.5]
              "
            >
              If you have any questions or need any assistance during business
              hours please get in touch.
            </p>

            {/* CONTACT GRID */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[#A2A2A2] text-sm">
              <div>
                <p className="text-white font-medium">Call on</p>
                <p>+91 98765 43210</p>
                <p>+91 98000 56780</p>
              </div>

              <div>
                <p className="text-white font-medium">Location</p>
                <p>USA, New York - 1060</p>
                <p>St. First Avenue 1</p>
              </div>

              <div>
                <p className="text-white font-medium">Email</p>
                <p>username@example.com</p>
                <p>username@gmail.com</p>
              </div>

              <div>
                <p className="text-white font-medium">Social Network</p>

                <div className="flex gap-4 mt-2 items-center">
                  <a href="#" className="opacity-70 hover:opacity-100 transition">
                    <img src="/assets/icon/Facebook.svg" alt="Facebook" className="w-[20px] h-[20px]" />
                  </a>
                  <a href="#" className="opacity-70 hover:opacity-100 transition">
                    <img src="/assets/icon/Twitter.svg" alt="Twitter" className="w-[20px] h-[20px]" />
                  </a>
                  <a href="#" className="opacity-70 hover:opacity-100 transition">
                    <img src="/assets/icon/LinkedIn.svg" alt="LinkedIn" className="w-[20px] h-[20px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>

        <div className="h-[64px]" />

        {/* FOOTER BOTTOM */}
        <div className="flex flex-col lg:flex-row gap-[80px] pt-[64px] border-t border-white/10">
          <div className="flex-1">
            <img src={logo} alt="Bluvo Digital" className="w-[109px]" />

            {/* Paragraph — Old/P2 */}
           {/* Paragraph — Old/P2 */}
<p
  className="
     text-[#4D9EFF]
    font-[Geist]
    text-[45px]
    font-medium
    leading-[1.2]
    tracking-[-0.9px]
  "
>
  <span className="text-[#4D9EFF]">Let's collaborate</span>{" "}
  <span className="text-[#CFCFCF]">
    to create<br/> something truly remarkable.
  </span>
</p>

          </div>

          <div className="flex gap-[80px]">
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
