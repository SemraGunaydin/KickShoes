import type { FC } from "react";
import type { IShoe } from "../../types";

interface Props {
  shoe: IShoe;
  design?: string;
}

const Price: FC<Props> = ({ shoe, design }) => {
  let price: number = shoe.price;

  // calculate if discount has
  if (shoe.discount) {
    price = (shoe.price * (100 - shoe.discount)) / 100;
  }

  return (
    <span
      className={`${shoe.discount > 0 ? "text-my-yellow" : "text-white"} ${design}`}
    >
      zł{price.toFixed(2)}
    </span>
  );
};

export default Price;