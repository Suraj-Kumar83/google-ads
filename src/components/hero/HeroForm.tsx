import React, { useState } from "react";

const HeroForm = () => {
  const [selected, setSelected] = useState("");

  return (
    <div
      className="
        w-full max-w-[610px]
        p-6 sm:p-10 lg:p-16
        flex flex-col gap-4
        rounded-2xl
        bg-white/5
        backdrop-blur-xl
      "
    >
      {/* Title */}
      <h3
        className="
          text-white
          text-[28px] sm:text-[36px] lg:text-[45px]
          font-medium
          leading-[1.2]
          tracking-[-0.9px]
        "
      >
        Get in Touch
      </h3>

      {/* Form */}
      <form className="w-full flex flex-col">
        <div className="flex flex-col gap-5 sm:gap-6">
          <Input placeholder="Full name" />
          <Input placeholder="Work email" />
          <Input placeholder="Phone number" />

          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            className={`
              w-full
              bg-transparent
              border-0 border-b
              pb-3
              outline-none
              transition
              text-[15px]
              ${selected
                ? "text-white border-white/40"
                : "text-white/50 border-white/40"}
            `}
          >
            <option value="" disabled className="text-black">
              Select your monthly budget
            </option>
            <option className="text-black" value="1-5">$1k – $5k</option>
            <option className="text-black" value="5-10">$5k – $10k</option>
            <option className="text-black" value="10+">$10k+</option>
          </select>

          <textarea
            placeholder="Message"
            className="
              w-full
              h-24
              resize-none
              bg-transparent
              border-0 border-b border-white/40
              pb-3
              outline-none
              text-white
              text-[15px]
              placeholder:text-white/60
            "
          />
        </div>

        <button
          className="
            mt-8 sm:mt-12
            w-full
            py-4 sm:py-5
            rounded-lg
            bg-[#FFEA4D]
            text-[#1B3759]
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

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={`
        w-full
        bg-transparent
        border-0 border-b border-white/40
        pb-3
        outline-none
        text-white
        text-[15px]
        placeholder:text-white/60
        ${className ?? ""}
      `}
    />
  );
};

export default HeroForm;
