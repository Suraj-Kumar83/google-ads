const ContactForm = () => {
  return (
    <div className="bg-white/5 rounded-[16px] p-[48px]">
      {/* H3 — Old/H5 */}
      <h3
        className="
          text-white
          font-[Geist]
          text-[28px]
          font-medium
          leading-[1.2]
          tracking-[-0.56px]
        "
      >
        Get in Touch
      </h3>

      {/* Paragraph — Old/P2 */}
      <p
        className="
          mt-1
          text-[#CFCFCF]
          font-[Geist]
          text-[16px]
          font-normal
          leading-[1.5]
        "
      >
        You can reach us anytime.
      </p>

      {/* Form */}
      <form className="mt-8 space-y-5">
        <input
          className="
            form-input
            placeholder:text-white
            placeholder:font-[Geist]
            placeholder:text-[16px]
            placeholder:font-normal
            placeholder:leading-[1.57]
          "
          placeholder="Full name"
        />

        <input
          className="
            form-input
            placeholder:text-white
            placeholder:font-[Geist]
            placeholder:text-[16px]
            placeholder:font-normal
            placeholder:leading-[1.57]
          "
          placeholder="Work email"
        />

        <input
          className="
            form-input
            placeholder:text-white
            placeholder:font-[Geist]
            placeholder:text-[16px]
            placeholder:font-normal
            placeholder:leading-[1.57]
          "
          placeholder="Phone number"
        />

        <select
          className="
            form-input
            text-white
            font-[Geist]
            text-[16px]
            font-normal
            leading-[1.57]
          "
        >
          <option>What Services Are You Interested In?</option>
        </select>

        <select
          className="
            form-input
            text-white
            font-[Geist]
            text-[16px]
            font-normal
            leading-[1.57]
          "
        >
          <option>Monthly Ad Budget</option>
        </select>

        <textarea
          className="
            form-input
            h-[100px]
            placeholder:text-white
            placeholder:font-[Geist]
            placeholder:text-[16px]
            placeholder:font-normal
            placeholder:leading-[1.57]
          "
          placeholder="Message"
        />

       <button
  className="
    w-full
    flex
    px-[40px] py-[20px]
    items-center justify-center
    gap-[7px]

    rounded-[8px]
    bg-[#FFEA4D]

    text-[#1B3759]
    font-[Geist]
    text-[16px]
    font-semibold
    leading-[1.2]

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
