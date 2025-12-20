const HeroForm = () => {
  return (
    <div
      className="
        flex flex-col items-start
        p-16 gap-16
        rounded-2xl
        bg-white/5
        backdrop-blur-xl
      "
    >
      {/* Title */}
      <h3 className="text-2xl font-semibold">
        Get in Touch
      </h3>

      {/* Form */}
      <form className="w-full flex flex-col gap-6">
        <Input placeholder="Full name" />
        <Input placeholder="Work email" />
        <Input placeholder="Phone number" />

        <select className="form-input">
          <option>Select your monthly budget</option>
          <option>$1k – $5k</option>
          <option>$5k – $10k</option>
          <option>$10k+</option>
        </select>

        <textarea
          className="form-input h-24"
          placeholder="Message"
        />

        <button
          className="
            mt-6 w-full
            bg-yellow-400 text-black
            py-3 rounded-lg
            font-semibold
            hover:bg-yellow-300
            transition
          "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

const Input = ({ placeholder }: { placeholder: string }) => (
  <input
    placeholder={placeholder}
    className="form-input"
  />
);

export default HeroForm;
