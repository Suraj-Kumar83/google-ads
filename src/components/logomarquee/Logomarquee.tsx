const logos = Array.from({ length: 12 }, (_, i) =>
  `/assets/logo/logo${i + 1}.png`
);

const LogoMarquee = () => {
  return (
    <div className="relative w-full overflow-hidden">
    <div className="pointer-events-none absolute inset-0 z-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [--webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]" />
      <div className="flex w-max animate-marquee gap-[5px]">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="w-[160px] h-[70px] flex items-center justify-center shrink-0"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="max-w-full max-h-full object-contain opacity-70"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
