const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      
      {/* Blob 1 – top left */}
      <div
        className="
          absolute
          top-[10%] left-[-20%]
          w-[280px] h-[280px]
          sm:w-[380px] sm:h-[380px]
          md:w-[480px] md:h-[480px]
          lg:w-[520px] lg:h-[520px]
          rounded-full
          bg-brandBlue/25
          blur-glow
          motion-safe:animate-blobA
        "
      />

      {/* Blob 2 – bottom right */}
      <div
        className="
          absolute
          bottom-[10%] right-[-25%]
          w-[320px] h-[320px]
          sm:w-[420px] sm:h-[420px]
          md:w-[540px] md:h-[540px]
          lg:w-[620px] lg:h-[620px]
          rounded-full
          bg-brandBlue/20
          blur-glow
          motion-safe:animate-blobB
        "
      />

    </div>
  );
};

export default GlobalBackground;
