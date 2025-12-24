import React from "react";
import { useState } from "react";

const HeroForm = () => {
   const [selected, setSelected] = useState("");
  return (
    <div
      className="
        flex flex-col items-start
        p-16 gap-3
        rounded-2xl
        bg-white/5
        backdrop-blur-xl
        w-[610px]
      "
    >
      {/* Title */}
      <h3
        className="
          self-stretch
          text-white
          font-[Geist]
          text-[45px]
          font-medium
          leading-[1.2]
          tracking-[-0.9px]
        "
      >
        Get in Touch
      </h3>

      {/* Form */}
      <form className="w-full flex flex-col">
        {/* Inputs block */}
        <div className="flex flex-col gap-6">
           <Input
    placeholder="Full name"
    className="text-[15px]"
  />

  <Input
    placeholder="Work email"
    className="text-[15px]"
  />

  <Input
    placeholder="Phone number"
    className="text-[15px]"
  />

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
        font-[Geist]
        text-[15px]
        leading-[1.57]

        ${selected
          ? "text-white "
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
          {/* Message */}
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
              transition
              text-white
              font-[Geist]
              text-[16px]
              font-normal
              leading-[1.57]
              placeholder:text-white/60
            "
          />
        </div>

        {/* Submit */}
        <button
          className="
            mt-16
            flex
            w-full
            px-[40px] py-[20px]
            justify-center items-center
            rounded-[8px]
            bg-[#FFEA4D]
            shadow-[0_4px_100px_0_rgba(77,158,255,0.20)]
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

/* ============================= */
/* Input Component (Underline)   */
/* ============================= */

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
        transition
        text-white
        font-[Geist]
        text-[12px]
        font-normal
        leading-[1.57]
        placeholder:text-white/60
        ${className ?? ""}
      `}
    />
  );
};

export default HeroForm;
