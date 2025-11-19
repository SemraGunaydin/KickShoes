import type { FC } from "react";

const Heading: FC = () => {
  return (
    <div className="flex justify-between items-center my-6 md:mt-9 lg:mt-12 xl:mt-20 xl:mb-8">
      <h1 className="font-semibold uppercase leading-tight text-2xl md:text-4xl lg:text-6xl xl:text-7xl">
        Don’t Miss <br /> New Arrivals
      </h1>

      <button className="bg-my-blue text-white py-2 px-3 lg:py-3 lg:px-7 rounded-lg hover:brightness-90 transition cursor-pointer">
        Start Shopping
      </button>
    </div>
  );
};

export default Heading;