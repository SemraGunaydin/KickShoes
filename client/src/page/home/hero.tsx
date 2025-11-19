import type { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="relative mt-6 md:mt-12 xl:mt-20">
      <div className="absolute top-1/2 transform -translate-y-1/2 max-sm:h-full max-sm:flex flex-col justify-end text-white px-4 py-2 xs:py-4 sm:p-6 md:p-10">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl xl:font-semibold text-grey">
		Get inspired by Singles' Day
        </p>

        <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-semibold">
		hits up to -40%
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-4/5 text-grey">
		Strength, style and motivation
        </p>
      </div>

      <img src="/banner.png" alt="banner" />
    </div>
  );
};

export default Hero;