const ContactForm = () => {
  return (
    <div className="bg-white/5 rounded-[16px] p-[48px]">
      <h3 className="text-white text-[20px] font-medium">
        Get in Touch
      </h3>
      <p className="text-[#A2A2A2] text-sm mt-1">
        You can reach us anytime.
      </p>

      <form className="mt-8 space-y-5">
        <input className="form-input" placeholder="Full name" />
        <input className="form-input" placeholder="Work email" />
        <input className="form-input" placeholder="Phone number" />

        <select className="form-input">
          <option>What Services Are You Interested In?</option>
        </select>

        <select className="form-input">
          <option>Monthly Ad Budget</option>
        </select>

        <textarea
          className="form-input h-[100px]"
          placeholder="Message"
        />

        <button className="w-full mt-4 bg-white text-black py-3 rounded-lg font-medium">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
