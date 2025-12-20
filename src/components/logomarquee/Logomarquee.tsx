const logos = Array.from({ length: 12 }, (_, i) =>
  `/assets/logo/logo${i + 1}.png`
);

const LogoMarquee = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex w-[200%] gap-[40px] animate-marquee">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="
              w-[180px] h-[88px]
              opacity-[0.75]
              bg-center bg-cover bg-no-repeat
              shrink-0
            "
            style={{ backgroundImage: `url(${logo})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;
