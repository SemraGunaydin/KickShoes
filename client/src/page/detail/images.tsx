import type { FC } from "react";

interface Props {
  images: string[];
}

const Images: FC<Props> = ({ images }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {images.map((image, key) => (
        <img
          key={key}
          src={image.startsWith("/") ? image : "/" + image}
          alt="shoe"
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-auto object-cover rounded-lg"
        />
      ))}
    </div>
  );
};

export default Images;