const ContactForm = () => {
  return (
    <div className="bg-white/5 rounded-[16px] p-6 sm:p-8 lg:p-[48px]">
      <h3
        className="
          text-white
          font-[Geist]
          text-[22px] sm:text-[24px] lg:text-[28px]
          font-medium
          leading-[1.2]
          tracking-[-0.56px]
        "
      >
        Get in Touch
      </h3>

      <p
        className="
          mt-1
          text-[#CFCFCF]
          font-[Geist]
          text-[14px] sm:text-[15px] lg:text-[16px]
          leading-[1.5]
        "
      >
        You can reach us anytime.
      </p>

      <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
        <input className="form-input" placeholder="Full name" />
        <input className="form-input" placeholder="Work email" />
        <input className="form-input" placeholder="Phone number" />

        <select className="form-input">
          <option>What Services Are You Interested In?</option>
        </select>

        <select className="form-input">
          <option>Monthly Ad Budget</option>
        </select>

        <textarea className="form-input h-[80px] sm:h-[100px]" placeholder="Message" />

        <button
          className="
            w-full
            px-[32px] sm:px-[40px]
            py-[16px] sm:py-[20px]
            rounded-[8px]
            bg-[#FFEA4D]
            text-[#1B3759]
            font-[Geist]
            text-[15px] sm:text-[16px]
            font-semibold
            transition
            hover:opacity-90
          "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
