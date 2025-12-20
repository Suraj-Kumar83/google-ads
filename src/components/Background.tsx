const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      
      {/* Blob 1 – top left */}
      <div
        className="
          absolute
          top-[8%] left-[-12%]
          w-[520px] h-[520px]
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
          bottom-[12%] right-[-15%]
          w-[620px] h-[620px]
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
